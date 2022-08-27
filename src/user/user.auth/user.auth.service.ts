import { Body, ForbiddenException, Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from '../dto/dto';
import * as argon from "argon2"
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserAuthService {
    constructor(private prismaS: PrismaService, private jwt: JwtService, private config: ConfigService) { }


    async signUp(@Body() dto: SignUpDto) {
        let hashedPassword = await argon.hash(dto.password)
        let apiKey = (await argon.hash(`${dto.email}${dto.name}`)).substring(30)

        try {
            let user = this.prismaS.user.create(
                {
                    data: {
                        email: dto.email,
                        name: dto.name,
                        password: hashedPassword,
                        apiKey: apiKey,

                    }
                }
            )

            return await this.signToken(
                (await user).email,
                (await user).id
            )

        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                throw new ForbiddenException(
                    "Invalid infos"
                )
            }
        }

    }

    async signIn(@Body() dto: SignInDto) {
        let user = await this.prismaS.user.findFirst(
            {
                where: {
                    email: dto.email,

                }
            }
        )

        if (!user) {
            throw new ForbiddenException(
                "Invalid Email Or Password"
            )
        }

        if (!argon.verify(user.password, dto.password)) {

            throw new ForbiddenException(
                "Invalid Email Or Password"
            )
        }

        return await this.signToken(
            user.email,
            user.id
        )
    }

    async signToken(
        email: string,
        id: number
    ) {
        const payload = {
            sub: id,
            email
        }

        const token = await this.jwt.signAsync(
            payload,
            {
                expiresIn: "44640m",
                secret: await this.config.get("JWT_SECRET")
            }
        )

        return {
            accessToken: token
        }

    }
}

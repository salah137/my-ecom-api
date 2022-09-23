import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from '../dto/dto';
import * as argon from 'argon2'


@Injectable()
export class AuthService {
    constructor(private prismaS: PrismaService, private jwt: JwtService, private config : ConfigService) {

    }

    async signUp(dto: SignUpDto) {
        let hashedPassword = await argon.hash(dto.password)

        try {
            let user = this.prismaS.appUser.create(
                {
                    data: {
                        email: dto.email,
                        name: dto.name,
                        password: hashedPassword,
                        appId : dto.appId

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

    async signIn( dto: SignInDto) {
        let user = await this.prismaS.appUser.findFirst(
            {
                where: {
                    email: dto.email,
                    appId : dto.appId
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

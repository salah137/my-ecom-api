import { SignInDto, SignUpDto } from './dto/user_dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class UserAuthService {
    private prismaS;
    private jwt;
    private config;
    constructor(prismaS: PrismaService, jwt: JwtService, config: ConfigService);
    signUp(dto: SignUpDto): Promise<{
        accessToken: string;
    }>;
    signIn(dto: SignInDto): Promise<{
        accessToken: string;
    }>;
    signToken(email: string, id: number): Promise<{
        accessToken: string;
    }>;
}

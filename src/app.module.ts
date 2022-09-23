import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { JwtStrategy } from './user/user.auth/strategy/jwt.strategy';
import { UserModule } from './user/user.module';
import { AppUserModule } from './app_user/app_user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AppUserModule,JwtModule.register({})],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule { }

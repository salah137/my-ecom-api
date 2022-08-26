import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserAuthController } from './user.auth.controller';
import { UserAuthService } from './user.auth.service';

@Module({
  imports : [PrismaModule,JwtModule.register({})],
  controllers: [UserAuthController],
  providers: [UserAuthService]
})
export class UserAuthModule {}
   
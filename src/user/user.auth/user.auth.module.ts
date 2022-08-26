import { Module } from '@nestjs/common';
import { User.AuthController } from './user.auth.controller';
import { User.AuthService } from './user.auth.service';

@Module({
  controllers: [User.AuthController],
  providers: [User.AuthService]
})
export class User.AuthModule {}

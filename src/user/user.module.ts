import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User.AuthModule } from './user.auth/user.auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [User.AuthModule]
})
export class UserModule {}

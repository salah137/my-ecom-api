import { Module } from '@nestjs/common';
import { UserActionsModule } from './user.actions/user.actions.module';
import { UserAuthModule } from './user.auth/user.auth.module';

@Module({
  imports: [UserAuthModule,UserActionsModule]
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserActionsController } from './user.actions.controller';
import { UserActionsService } from './user.actions.service';

@Module({
    controllers : [UserActionsController],
    providers : [UserActionsService]
})
export class UserActionsModule {}

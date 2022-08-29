import { Body, Controller, Delete, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ProductDto } from '../dto/dto';
import { UserActionsService } from './user.actions.service';

@UseGuards(AuthGuard("jwt"))
@Controller('user/actions')
export class UserActionsController {
    constructor(private actionsS: UserActionsService) { }

// apps managing routs :::>
    @Post("createApp")
    createApp(@Req() request: Request) {
        return this.actionsS.createApp(request.user)
    }

    @Get("getApps")
    getApps(@Req() request: Request) {
        return this.actionsS.getApps(request.user)
    }

    @Get("getApp")
    getApp(@Req() request: Request) {
        return this.actionsS.getApp(Number(request.query.appId), request.user)
    }

    @Delete("deleteApp")
    deleteApp(@Query("appId") appId: string) {
        return this.actionsS.deleteApp(Number(appId))
    }

// products managing routes :::>
    @Post("createProduct")
    createProduct(@Body() product : ProductDto){
        return this.actionsS.createProduct(product)
    }
    
    
}

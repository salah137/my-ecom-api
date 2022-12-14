import { Body, Controller, Delete, Get, ParseIntPipe, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ProductDto, UpdatedProductDto } from '../dto/dto';
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
    deleteApp(@Query("appId") appId: ParseIntPipe) {
        return this.actionsS.deleteApp(appId)
    }

// products managing routes :::>
    @Post("createProduct")
    createProduct(@Body() product : ProductDto){
        return this.actionsS.createProduct(product)
    }
    
    @Patch("updateProduct")
    updateProduct(@Body() dto : UpdatedProductDto){
        return this.actionsS.updatePoduct(dto)
    }

    @Delete("deleteProduct")
    deleteProduct(@Query("id") id: ParseIntPipe){
        return this.actionsS.deleteProduct(Number(id))
    }

    @Get("getProducts")
    getProducts(@Query("appId") appId: ParseIntPipe){
        return this.actionsS.getProducts(appId)
    }

    @Get("getProduct")
    getProdut(@Query("appId") appId : ParseIntPipe, @Query("id") id : ParseIntPipe){
        return this.actionsS.getProduct(Number(appId),Number(id))
    }
}

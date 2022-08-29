import { ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';
import { ProductDto, UpdatedProductDto } from '../dto/dto';
import { UserActionsService } from './user.actions.service';
export declare class UserActionsController {
    private actionsS;
    constructor(actionsS: UserActionsService);
    createApp(request: Request): Promise<{
        Done: string;
        id: number;
    }>;
    getApps(request: Request): Promise<import(".prisma/client").App[]>;
    getApp(request: Request): Promise<import(".prisma/client").App>;
    deleteApp(appId: ParseIntPipe): Promise<{
        Done: string;
    }>;
    createProduct(product: ProductDto): Promise<{
        Done: string;
        appId: number;
        id: number;
    }>;
    updateProduct(dto: UpdatedProductDto): Promise<{
        Done: string;
        id: number;
        error?: undefined;
    } | {
        error: string;
        Done?: undefined;
        id?: undefined;
    }>;
    deleteProduct(id: ParseIntPipe): Promise<{
        Done: string;
        error?: undefined;
    } | {
        error: string;
        Done?: undefined;
    }>;
    getProducts(appId: ParseIntPipe): Promise<import(".prisma/client").Product[]>;
    getProdut(appId: ParseIntPipe, id: ParseIntPipe): Promise<import(".prisma/client").Product>;
}

import { Request } from 'express';
import { ProductDto } from '../dto/dto';
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
    deleteApp(appId: string): Promise<{
        Done: string;
    }>;
    createProduct(product: ProductDto): Promise<import(".prisma/client").Product>;
}

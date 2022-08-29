import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto, UpdatedProductDto } from '../dto/dto';
export declare class UserActionsService {
    private prismaS;
    constructor(prismaS: PrismaService);
    createApp(user: any): Promise<{
        Done: string;
        id: number;
    }>;
    getApps(user: any): Promise<import(".prisma/client").App[]>;
    getApp(appId: any, userId: any): Promise<import(".prisma/client").App>;
    deleteApp(appId: any): Promise<{
        Done: string;
    }>;
    createProduct(dto: ProductDto): Promise<{
        Done: string;
        appId: number;
        id: number;
    }>;
    getProducts(appId: any): Promise<import(".prisma/client").Product[]>;
    getProduct(appId: any, id: any): Promise<import(".prisma/client").Product>;
    updatePoduct(dto: UpdatedProductDto): Promise<{
        Done: string;
        id: number;
        error?: undefined;
    } | {
        error: string;
        Done?: undefined;
        id?: undefined;
    }>;
    deleteProduct(id: any): Promise<{
        Done: string;
        error?: undefined;
    } | {
        error: string;
        Done?: undefined;
    }>;
}

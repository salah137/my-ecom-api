import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from '../dto/dto';
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
    createProduct(dto: ProductDto): Promise<import(".prisma/client").Product>;
}

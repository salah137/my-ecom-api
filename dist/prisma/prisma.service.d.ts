import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    private config;
    constructor(config: ConfigService);
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserActionsService = class UserActionsService {
    constructor(prismaS) {
        this.prismaS = prismaS;
    }
    async createApp(user) {
        let app = await this.prismaS.app.create({
            data: {
                ownerId: user,
            }
        });
        return {
            "Done": "succeded",
            "id": app.id
        };
    }
    async getApps(user) {
        return await this.prismaS.app.findMany({
            where: {
                ownerId: user
            }
        });
    }
    async getApp(appId, userId) {
        return await this.prismaS.app.findFirst({
            where: {
                id: appId,
                ownerId: userId
            }
        });
    }
    async deleteApp(appId) {
        await this.prismaS.app.delete({
            where: {
                id: appId,
            }
        });
        return {
            "Done": "App deleted Succesfuly"
        };
    }
    async createProduct(dto) {
        let product = await this.prismaS.product.create({
            data: {
                appId: dto.appId,
                name: dto.name,
                image: dto.image,
                price: parseFloat(dto.price)
            }
        });
        return {
            "Done": "product created Succesfuly",
            "appId": product.appId,
            "id": product.id
        };
    }
    async getProducts(appId) {
        let products = await this.prismaS.product.findMany({
            where: {
                appId: appId
            }
        });
        return products;
    }
    async getProduct(appId, id) {
        let product = await this.prismaS.product.findFirst({
            where: {
                id: id,
                appId: appId
            }
        });
        return product;
    }
    async updatePoduct(dto) {
        let updatedProduct = await this.prismaS.product.update({
            where: {
                id: dto.id
            },
            data: {
                name: dto.name,
                price: parseFloat(dto.price),
                image: dto.image
            }
        });
        return {
            "Done": "product updated Succesfuly",
            "id": updatedProduct.id
        };
    }
    async deleteProduct(id) {
        await this.prismaS.product.delete({
            where: {
                id: id
            }
        });
    }
};
UserActionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserActionsService);
exports.UserActionsService = UserActionsService;
//# sourceMappingURL=user.actions.service.js.map
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto, UpdatedProductDto } from '../dto/dto';

@Injectable()
export class UserActionsService {
    constructor(private prismaS: PrismaService) { }


    async createApp(user: any) {
        let app = await this.prismaS.app.create(
            {
                data: {
                    ownerId: user,
                }
            }
        )

        return {
            "Done": "succeded",
            "id": app.id
        }
    }


    async getApps(user: any) {
        return await this.prismaS.app.findMany(
            {
                where: {
                    ownerId: user
                }
            }
        )
    }

    async getApp(appId: any, userId: any) {
        return await this.prismaS.app.findFirst(
            {
                where: {
                    id: appId,
                    ownerId: userId
                }
            }
        )
    }

    async deleteApp(appId: any) {
        await this.prismaS.app.delete(
            {
                where: {
                    id: appId,
                }
            }
        )

        return {
            "Done":"App deleted Succesfuly"
        }
    }

    async createProduct(dto : ProductDto){
        let product = await this.prismaS.product.create(
            {
                data : {
                    appId : dto.appId,
                    name : dto.name,
                    image : dto.image,
                    price : parseFloat(dto.price)
                }
            }
        )


        return {
            "Done":"product created Succesfuly",
            "appId" : product.appId,
            "id" : product.id
        }

        
    }

    async getProducts(appId : any) {
        let products = await this.prismaS.product.findMany(
            {
                where : {
                    appId : appId
                }
            }
        )

        return products
    }


    async getProduct(appId : any, id : any){
        let product = await this.prismaS.product.findFirst(
            {
                where : {
                    id : id,
                    appId : appId
                }
            }
        )
        return product
    }

    async updatePoduct(dto : UpdatedProductDto){
        let updatedProduct = await this.prismaS.product.update(
            {
                where : {
                    id : dto.id
                },
                data : {
                    name : dto.name,
                    price : parseFloat(dto.price),
                    image :  dto.image
                }
            }
        )

        return {
            "Done":"product updated Succesfuly",
        }
    }
}

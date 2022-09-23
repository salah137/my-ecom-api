import { HttpCode, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { PrismaService } from "src/prisma/prisma.service";

export class Middleware implements NestMiddleware {
    constructor(private prismaS: PrismaService) {

    }
    use(req: Request, res: Response, next: (error?: any) => void) {
        if (this.prismaS.user.findUnique({
            where: {
                apiKey: req.query.apiKey.toString()
            }

        })) {
            next()
        } else {
            return res.status(403).json({
                "bad request": "no api key found"
            })
        }
    }

}
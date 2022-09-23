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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthService = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../dto/dto");
const argon = require("argon2");
const prisma_service_1 = require("../../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let UserAuthService = class UserAuthService {
    constructor(prismaS, jwt, config) {
        this.prismaS = prismaS;
        this.jwt = jwt;
        this.config = config;
    }
    async signUp(dto) {
        let hashedPassword = await argon.hash(dto.password);
        let apiKey = (await argon.hash(`${dto.email}${dto.name}`)).substring(30);
        try {
            let user = this.prismaS.user.create({
                data: {
                    email: dto.email,
                    name: dto.name,
                    password: hashedPassword,
                    apiKey: apiKey,
                }
            });
            return await this.signToken((await user).email, (await user).id);
        }
        catch (e) {
            if (e instanceof runtime_1.PrismaClientKnownRequestError) {
                throw new common_1.ForbiddenException("Invalid infos");
            }
        }
    }
    async signIn(dto) {
        let user = await this.prismaS.user.findFirst({
            where: {
                email: dto.email,
            }
        });
        if (!user) {
            throw new common_1.ForbiddenException("Invalid Email Or Password");
        }
        if (!argon.verify(user.password, dto.password)) {
            throw new common_1.ForbiddenException("Invalid Email Or Password");
        }
        return await this.signToken(user.email, user.id);
    }
    async signToken(email, id) {
        const payload = {
            sub: id,
            email
        };
        const token = await this.jwt.signAsync(payload, {
            expiresIn: "44640m",
            secret: await this.config.get("JWT_SECRET")
        });
        return {
            accessToken: token
        };
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], UserAuthService.prototype, "signUp", null);
UserAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService, config_1.ConfigService])
], UserAuthService);
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user.auth.service.js.map
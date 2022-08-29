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
exports.UserActionsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const dto_1 = require("../dto/dto");
const user_actions_service_1 = require("./user.actions.service");
let UserActionsController = class UserActionsController {
    constructor(actionsS) {
        this.actionsS = actionsS;
    }
    createApp(request) {
        return this.actionsS.createApp(request.user);
    }
    getApps(request) {
        return this.actionsS.getApps(request.user);
    }
    getApp(request) {
        return this.actionsS.getApp(Number(request.query.appId), request.user);
    }
    deleteApp(appId) {
        return this.actionsS.deleteApp(appId);
    }
    createProduct(product) {
        return this.actionsS.createProduct(product);
    }
    updateProduct(dto) {
        return this.actionsS.updatePoduct(dto);
    }
    deleteProduct(id) {
        return this.actionsS.deleteProduct(Number(id));
    }
    getProducts(appId) {
        return this.actionsS.getProducts(appId);
    }
    getProdut(appId, id) {
        return this.actionsS.getProduct(Number(appId), Number(id));
    }
};
__decorate([
    (0, common_1.Post)("createApp"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "createApp", null);
__decorate([
    (0, common_1.Get)("getApps"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "getApps", null);
__decorate([
    (0, common_1.Get)("getApp"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "getApp", null);
__decorate([
    (0, common_1.Delete)("deleteApp"),
    __param(0, (0, common_1.Query)("appId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "deleteApp", null);
__decorate([
    (0, common_1.Post)("createProduct"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ProductDto]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)("updateProduct"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdatedProductDto]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)("deleteProduct"),
    __param(0, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)("getProducts"),
    __param(0, (0, common_1.Query)("appId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)("getProduct"),
    __param(0, (0, common_1.Query)("appId")),
    __param(1, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe, common_1.ParseIntPipe]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "getProdut", null);
UserActionsController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Controller)('user/actions'),
    __metadata("design:paramtypes", [user_actions_service_1.UserActionsService])
], UserActionsController);
exports.UserActionsController = UserActionsController;
//# sourceMappingURL=user.actions.controller.js.map
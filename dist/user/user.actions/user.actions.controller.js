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
        return this.actionsS.deleteApp(Number(appId));
    }
    createProduct(product) {
        return this.actionsS.createProduct(product);
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
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "deleteApp", null);
__decorate([
    (0, common_1.Post)("createProduct"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ProductDto]),
    __metadata("design:returntype", void 0)
], UserActionsController.prototype, "createProduct", null);
UserActionsController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Controller)('user/actions'),
    __metadata("design:paramtypes", [user_actions_service_1.UserActionsService])
], UserActionsController);
exports.UserActionsController = UserActionsController;
//# sourceMappingURL=user.actions.controller.js.map
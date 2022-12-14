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
exports.UserAuthController = void 0;
const common_1 = require("@nestjs/common");
const user_auth_service_1 = require("./user.auth.service");
const dto_1 = require("../dto/dto");
let UserAuthController = class UserAuthController {
    constructor(userAuthservice) {
        this.userAuthservice = userAuthservice;
    }
    signUp(dto) {
        return this.userAuthservice.signUp(dto);
    }
    signIn(dto) {
        return this.userAuthservice.signIn(dto);
    }
};
__decorate([
    (0, common_1.Post)("/signUp"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpDto]),
    __metadata("design:returntype", void 0)
], UserAuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)("/signIn"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignInDto]),
    __metadata("design:returntype", void 0)
], UserAuthController.prototype, "signIn", null);
UserAuthController = __decorate([
    (0, common_1.Controller)('user/auth'),
    __metadata("design:paramtypes", [user_auth_service_1.UserAuthService])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user.auth.controller.js.map
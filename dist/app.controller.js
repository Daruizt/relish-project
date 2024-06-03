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
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./services/app.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getPhotosController(title, albumTitle, userEmail, limit, offset) {
        return this.appService.getPhotosService(title, albumTitle, userEmail, parseInt(limit), parseInt(offset));
    }
    getHelloWorldController() {
        return 'hello World';
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'title', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'album.title', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'album.user.email', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false }),
    (0, common_1.Get)('/externalapi/photos'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('title')),
    __param(1, (0, common_1.Query)('album.title')),
    __param(2, (0, common_1.Query)('album.user.email')),
    __param(3, (0, common_1.Query)('limit', new common_1.DefaultValuePipe('25'))),
    __param(4, (0, common_1.Query)('offset', new common_1.DefaultValuePipe('1'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPhotosController", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHelloWorldController", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map
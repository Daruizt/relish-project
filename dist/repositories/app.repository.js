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
exports.AppRepository = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const filter_exceptions_helper_1 = require("../exception/helpers/filter-exceptions.helper");
const custom_exception_1 = require("../exception/models/custom.exception");
const app_config_module_1 = require("../configuration/modules/app.config.module");
let AppRepository = class AppRepository {
    constructor(http) {
        this.http = http;
    }
    async getPhotosRepository() {
        const photosResponse = await (0, rxjs_1.firstValueFrom)(this.http.get('/photos').pipe((0, rxjs_1.catchError)((0, filter_exceptions_helper_1.catchErrorHandler)(custom_exception_1.CustomException)), (0, rxjs_1.tap)((0, filter_exceptions_helper_1.ErrorHandler)()), (0, rxjs_1.map)((response) => {
            return response.data;
        })));
        return photosResponse;
    }
    async getAlbumsRepository() {
        const albumResponse = await (0, rxjs_1.firstValueFrom)(this.http.get('/albums').pipe((0, rxjs_1.catchError)((0, filter_exceptions_helper_1.catchErrorHandler)(custom_exception_1.CustomException)), (0, rxjs_1.tap)((0, filter_exceptions_helper_1.ErrorHandler)()), (0, rxjs_1.map)((response) => {
            return response.data;
        })));
        return albumResponse;
    }
    async getUserRepository() {
        const userResponse = await (0, rxjs_1.firstValueFrom)(this.http.get('/users').pipe((0, rxjs_1.catchError)((0, filter_exceptions_helper_1.catchErrorHandler)(custom_exception_1.CustomException)), (0, rxjs_1.tap)((0, filter_exceptions_helper_1.ErrorHandler)()), (0, rxjs_1.map)((response) => {
            return response.data;
        })));
        return userResponse;
    }
};
exports.AppRepository = AppRepository;
exports.AppRepository = AppRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_config_module_1.ExternalHttpService])
], AppRepository);
//# sourceMappingURL=app.repository.js.map
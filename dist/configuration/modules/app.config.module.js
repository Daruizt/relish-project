"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpModule = exports.ExternalHttpService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_module_1 = require("./config.module");
class ExternalHttpService extends axios_1.HttpService {
}
exports.ExternalHttpService = ExternalHttpService;
let AxiosHttpModule = class AxiosHttpModule {
};
exports.AxiosHttpModule = AxiosHttpModule;
exports.AxiosHttpModule = AxiosHttpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ExternalConfigModule,
            axios_1.HttpModule.registerAsync({
                imports: [config_module_1.ExternalConfigModule],
                inject: [config_module_1.ExternalConfigService],
                useFactory: (configService) => ({
                    baseURL: configService.get('external.relish.url'),
                }),
            }),
        ],
        providers: [
            {
                provide: ExternalHttpService,
                useExisting: axios_1.HttpService,
            },
        ],
        exports: [ExternalHttpService],
    })
], AxiosHttpModule);
//# sourceMappingURL=app.config.module.js.map
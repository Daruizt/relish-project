"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalConfigModule = exports.ExternalConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_config_1 = require("../env.config");
class ExternalConfigService extends config_1.ConfigService {
}
exports.ExternalConfigService = ExternalConfigService;
let ExternalConfigModule = class ExternalConfigModule {
};
exports.ExternalConfigModule = ExternalConfigModule;
exports.ExternalConfigModule = ExternalConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            process.env.NODE_ENV === 'test'
                ? config_1.ConfigModule.forRoot({
                    envFilePath: ['.env.test'],
                    load: [env_config_1.default],
                })
                : config_1.ConfigModule.forRoot({
                    envFilePath: ['.env'],
                    load: [env_config_1.default],
                }),
        ],
        providers: [ExternalConfigService],
        exports: [ExternalConfigService],
    })
], ExternalConfigModule);
//# sourceMappingURL=config.module.js.map
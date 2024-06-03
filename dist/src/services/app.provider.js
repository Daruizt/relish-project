"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProvider = void 0;
const app_repository_1 = require("../repositories/app.repository");
exports.AppProvider = {
    provide: 'AppDomainRepository',
    useClass: app_repository_1.AppRepository,
};
//# sourceMappingURL=app.provider.js.map
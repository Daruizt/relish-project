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
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(repository) {
        this.repository = repository;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        if (exception.constructor === common_1.HttpException) {
            response.status(status).json({
                code: 'EXCEPTION-UNMAPPED',
                details: 'HTTP_EXCEPTION',
                message: exception.message,
            });
        }
        else {
            const { details, code, message } = exception.getResponse();
            const resultFilterException = this.repository.filterSelectErrorExceptions(details, code);
            const finalStatus = resultFilterException.statusCode || status || 500;
            response.status(finalStatus).json({
                code: resultFilterException.code,
                details: resultFilterException.details,
                message: message || resultFilterException.message,
                statusCode: finalStatus,
            });
        }
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [Object])
], HttpExceptionFilter);
//# sourceMappingURL=error-handling.js.map
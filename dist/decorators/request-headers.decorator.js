"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHeaders = void 0;
const common_1 = require("@nestjs/common");
const dto_validation_pipe_1 = require("../pipes/dto-validation.pipe");
exports.RequestHeaders = (0, common_1.createParamDecorator)(async (property, ctx) => {
    const headers = ctx.switchToHttp().getRequest().headers;
    const validationPipe = new dto_validation_pipe_1.DtoValidationPipe();
    const result = await validationPipe.transform(headers, {
        type: 'headers',
        metatype: property,
    });
    return result;
});
//# sourceMappingURL=request-headers.decorator.js.map
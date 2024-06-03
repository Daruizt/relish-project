"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomException = void 0;
const common_1 = require("@nestjs/common");
const error_types_enum_1 = require("../../interfaces/types/error-types.enum");
class CustomException extends common_1.HttpException {
    constructor(details, message, statusCode = common_1.HttpStatus.BAD_REQUEST) {
        super({ details, message, code: error_types_enum_1.ErrorTypes.CUSTOM }, statusCode);
    }
}
exports.CustomException = CustomException;
//# sourceMappingURL=custom.exception.js.map
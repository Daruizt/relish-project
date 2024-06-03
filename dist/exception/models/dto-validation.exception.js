"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoValidationException = void 0;
const common_1 = require("@nestjs/common");
const error_types_enum_1 = require("../../interfaces/types/error-types.enum");
const merge_error_constraints_utils_1 = require("../utils/merge-error-constraints.utils");
const exceptionTypes = {
    body: 'INVALID_BODY',
    query: 'INVALID_QUERY_PARAMS',
    headers: 'INVALID_HEADERS',
};
class DtoValidationException extends common_1.HttpException {
    constructor(errors, type) {
        const validationErrors = (0, merge_error_constraints_utils_1.mergeErrorConstraints)(errors);
        super({
            message: validationErrors,
            details: exceptionTypes[type],
            code: error_types_enum_1.ErrorTypes.CUSTOM,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.DtoValidationException = DtoValidationException;
//# sourceMappingURL=dto-validation.exception.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorRepository = void 0;
const custom_types_error_exceptions_1 = require("../filters/custom-types-error-exceptions");
class ErrorRepository {
    constructor() {
        this.errors = {
            customExceptions: custom_types_error_exceptions_1.CustomTypesErrorsExceptions,
        };
    }
    addError(type, code, statusCode, details, message) {
        if (!this.errors[type]) {
            throw new Error('Error Type does not exist');
        }
        if (this.errors[type].find((error) => error.code === code)) {
            throw new Error('Error Code already exists');
        }
        if (this.errors[type].find((error) => error.details === details)) {
            throw new Error('Error Details already exists');
        }
        this.errors[type].push({
            code: code,
            details: details,
            statusCode: statusCode,
            message: message,
        });
    }
    filterSelectErrorExceptions(searchOption, searchCode) {
        if (!this.errors[searchCode]) {
            return {
                code: 'CUSTOM-UNMAPPED-ERROR-TYPE',
                details: 'HTTP_EXCEPTION',
                message: 'Error Type not found',
                statusCode: 500,
            };
        }
        const selectedItemTypesErrors = this.errors[searchCode].find((error) => error.details === searchOption);
        if (selectedItemTypesErrors) {
            return selectedItemTypesErrors;
        }
        return {
            code: 'CUSTOM-UNMAPPED-ERROR',
            details: 'HTTP_EXCEPTION',
            message: 'Error code not found',
            statusCode: 500,
        };
    }
}
exports.ErrorRepository = ErrorRepository;
//# sourceMappingURL=error-repository.js.map
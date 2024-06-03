"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.catchErrorHandler = void 0;
const custom_exception_1 = require("../models/custom.exception");
function catchErrorHandler(Exception, details = 'BAD_GATEWAY') {
    if (!Exception) {
        throw new Error('No exception provided');
    }
    return (error) => {
        var _a, _b, _c, _d;
        let message = error.message;
        if ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) {
            message = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message;
        }
        throw new Exception(details, message);
    };
}
exports.catchErrorHandler = catchErrorHandler;
function ErrorHandler(details = 'BAD_REQUEST') {
    return (response) => {
        if (response.data.errors && response.data.errors.length > 0) {
            throw new custom_exception_1.CustomException(details, response.data.errors[0].message);
        }
    };
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=filter-exceptions.helper.js.map
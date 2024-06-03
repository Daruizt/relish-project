"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeErrorConstraints = void 0;
function mergeErrorConstraints(errors) {
    return errors
        .map((error) => {
        if (error.constraints)
            return Object.values(error.constraints);
        return mergeErrorConstraints(error.children);
    })
        .flat(1)
        .join(' | ');
}
exports.mergeErrorConstraints = mergeErrorConstraints;
//# sourceMappingURL=merge-error-constraints.utils.js.map
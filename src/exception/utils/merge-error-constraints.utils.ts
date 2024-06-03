import { ValidationError } from '@nestjs/common';

function mergeErrorConstraints(errors: ValidationError[]) {
    return errors
        .map((error) => {
            if (error.constraints) return Object.values(error.constraints);
            return mergeErrorConstraints(error.children);
        })
        .flat(1)
        .join(' | ');
}

export { mergeErrorConstraints };

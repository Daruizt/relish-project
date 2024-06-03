import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';
import { ErrorTypes } from '@relish/interfaces/types/error-types.enum';
import { mergeErrorConstraints } from '../utils/merge-error-constraints.utils';

const exceptionTypes = {
    body: 'INVALID_BODY',
    query: 'INVALID_QUERY_PARAMS',
    headers: 'INVALID_HEADERS',
};

export class DtoValidationException extends HttpException {
    constructor(errors: ValidationError[], type: string) {
        const validationErrors = mergeErrorConstraints(errors);
        super(
            {
                message: validationErrors,
                details: exceptionTypes[type],
                code: ErrorTypes.CUSTOM,
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}

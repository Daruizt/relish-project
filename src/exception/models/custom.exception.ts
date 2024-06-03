import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorTypes } from '@relish/interfaces/types/error-types.enum';

export class CustomException extends HttpException {
    constructor(
        details: string,
        message?: string,
        statusCode: number = HttpStatus.BAD_REQUEST,
    ) {
        super({ details, message, code: ErrorTypes.CUSTOM }, statusCode);
    }
}

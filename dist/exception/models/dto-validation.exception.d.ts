import { HttpException, ValidationError } from '@nestjs/common';
export declare class DtoValidationException extends HttpException {
    constructor(errors: ValidationError[], type: string);
}

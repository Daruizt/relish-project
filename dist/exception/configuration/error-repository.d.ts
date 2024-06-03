import { IErrorRepository } from '@relish/interfaces/exceptions/error-repository.interface';
import { ICustomErrorResponse } from '@relish/interfaces/exceptions/custom-error-response.interface';
import { ErrorTypes } from '@relish/interfaces/types/error-types.enum';
export declare class ErrorRepository implements IErrorRepository {
    errors: {
        customExceptions: ICustomErrorResponse[];
    };
    constructor();
    addError(type: ErrorTypes, code: string, statusCode: number, details: string, message: string): void;
    filterSelectErrorExceptions(searchOption: string, searchCode: ErrorTypes): ICustomErrorResponse;
}

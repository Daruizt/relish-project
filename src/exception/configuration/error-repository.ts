import { IErrorRepository } from '@relish/interfaces/exceptions/error-repository.interface';
import { CustomTypesErrorsExceptions } from '@relish/exception/filters/custom-types-error-exceptions';
import { ICustomErrorResponse } from '@relish/interfaces/exceptions/custom-error-response.interface';
import { ErrorTypes } from '@relish/interfaces/types/error-types.enum';

export class ErrorRepository implements IErrorRepository {
    errors: {
        customExceptions: ICustomErrorResponse[];
    };
    constructor() {
        this.errors = {
            customExceptions: CustomTypesErrorsExceptions,
        };
    }

    addError(
        type: ErrorTypes,
        code: string,
        statusCode: number,
        details: string,
        message: string,
    ) {
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

    filterSelectErrorExceptions(
        searchOption: string,
        searchCode: ErrorTypes,
    ): ICustomErrorResponse {
        if (!this.errors[searchCode]) {
            return {
                code: 'CUSTOM-UNMAPPED-ERROR-TYPE',
                details: 'HTTP_EXCEPTION',
                message: 'Error Type not found',
                statusCode: 500,
            };
        }

        const selectedItemTypesErrors = this.errors[searchCode].find(
            (error) => error.details === searchOption,
        );

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

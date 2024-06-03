import { ICustomErrorResponse } from '@relish/interfaces/exceptions/custom-error-response.interface';
export interface IErrorRepository {
    errors: {
        customExceptions: ICustomErrorResponse[];
    };
    filterSelectErrorExceptions(searchOption: string, searchCode: string): ICustomErrorResponse;
}

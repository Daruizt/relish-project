import { ICustomErrorResponse } from '@relish/interfaces/exceptions/custom-error-response.interface';

export const CustomTypesErrorsExceptions: ICustomErrorResponse[] = [
    {
        code: 'RELISH-001',
        details: 'INVALID_BODY',
        statusCode: 400,
    },
    {
        code: 'RELISH-002',
        details: 'INVALID_HEADERS',
        statusCode: 400,
    },
    {
        code: 'RELISH-003',
        details: 'INVALID_QUERY_PARAMS',
        statusCode: 400,
    },
    {
        code: 'RELISH-004',
        details: 'BAD_REQUEST',
        statusCode: 400,
    },
];

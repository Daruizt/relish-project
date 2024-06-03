import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ICustomErrorResponse } from '@relish/interfaces/exceptions/custom-error-response.interface';
import { IErrorRepository } from '@relish/interfaces/exceptions/error-repository.interface';

interface ExceptionCustomFilter extends ExceptionFilter {
    repository: IErrorRepository;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionCustomFilter {
    repository: IErrorRepository;
    constructor(repository: IErrorRepository) {
        this.repository = repository;
    }

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();

        if (exception.constructor === HttpException) {
            response.status(status).json({
                code: 'EXCEPTION-UNMAPPED',
                details: 'HTTP_EXCEPTION',
                message: exception.message,
            });
        } else {
            const { details, code, message } =
                exception.getResponse() as ICustomErrorResponse;
            const resultFilterException =
                this.repository.filterSelectErrorExceptions(details, code);

            const finalStatus =
                resultFilterException.statusCode || status || 500;
            response.status(finalStatus).json({
                code: resultFilterException.code,
                details: resultFilterException.details,
                message: message || resultFilterException.message,
                statusCode: finalStatus,
            });
        }
    }
}

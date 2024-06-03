import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { IErrorRepository } from '@relish/interfaces/exceptions/error-repository.interface';
interface ExceptionCustomFilter extends ExceptionFilter {
    repository: IErrorRepository;
}
export declare class HttpExceptionFilter implements ExceptionCustomFilter {
    repository: IErrorRepository;
    constructor(repository: IErrorRepository);
    catch(exception: HttpException, host: ArgumentsHost): void;
}
export {};

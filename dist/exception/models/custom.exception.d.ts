import { HttpException } from '@nestjs/common';
export declare class CustomException extends HttpException {
    constructor(details: string, message?: string, statusCode?: number);
}

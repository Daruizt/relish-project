import { CustomException } from '@relish/exception/models/custom.exception';
export declare function catchErrorHandler(Exception: typeof CustomException, details?: string): (error: any) => never;
export declare function ErrorHandler(details?: string): (response: any) => void;

import { PipeTransform, ArgumentMetadata, Paramtype } from '@nestjs/common';
type CustomParamType = Paramtype | 'headers';
interface CustomArgumentMetadata extends Omit<ArgumentMetadata, 'type'> {
    type: CustomParamType;
}
export declare class DtoValidationPipe implements PipeTransform<any> {
    transform(value: any, { type, metatype }: CustomArgumentMetadata): Promise<any>;
    private toValidate;
}
export {};

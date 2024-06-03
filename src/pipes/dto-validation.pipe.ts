/* eslint-disable @typescript-eslint/ban-types */
import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    Paramtype,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { DtoValidationException } from '@relish/exception/models/dto-validation.exception';

type CustomParamType = Paramtype | 'headers';

interface CustomArgumentMetadata extends Omit<ArgumentMetadata, 'type'> {
    type: CustomParamType;
}

@Injectable()
export class DtoValidationPipe implements PipeTransform<any> {
    public async transform(
        value: any,
        { type, metatype }: CustomArgumentMetadata,
    ) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToInstance(metatype, value);
        const errors = await validate(object);

        if (errors.length > 0) {
            throw new DtoValidationException(errors, type);
        }
        return object;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DtoValidationPipe } from '@relish/pipes/dto-validation.pipe';

export const RequestHeaders = createParamDecorator(
    async (property: any, ctx: ExecutionContext) => {
        const headers = ctx.switchToHttp().getRequest().headers;
        const validationPipe = new DtoValidationPipe();

        const result = await validationPipe.transform(headers, {
            type: 'headers',
            metatype: property,
        });
        return result;
    },
);

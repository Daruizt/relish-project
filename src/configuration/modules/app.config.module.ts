import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import {
    ExternalConfigModule,
    ExternalConfigService,
} from '@relish/configuration/modules/config.module';

export class ExternalHttpService extends HttpService {}

@Module({
    imports: [
        ExternalConfigModule,
        HttpModule.registerAsync({
            imports: [ExternalConfigModule],
            inject: [ExternalConfigService],
            useFactory: (configService: ExternalConfigService) => ({
                baseURL: configService.get<string>('external.relish.url'),
            }),
        }),
    ],
    providers: [
        {
            provide: ExternalHttpService,
            useExisting: HttpService,
        },
    ],
    exports: [ExternalHttpService],
})
export class AxiosHttpModule {}

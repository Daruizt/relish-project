import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from '@relish/configuration/env.config';

export class ExternalConfigService extends ConfigService {}

@Module({
    imports: [
        process.env.NODE_ENV === 'test'
            ? ConfigModule.forRoot({
                  envFilePath: ['.env.test'],
                  load: [configuration],
              })
            : ConfigModule.forRoot({
                  envFilePath: ['.env'],
                  load: [configuration],
              }),
    ],
    providers: [ExternalConfigService],
    exports: [ExternalConfigService],
})
export class ExternalConfigModule {}

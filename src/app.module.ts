import { Module } from '@nestjs/common';

import { AppService } from '@relish/services/app.service';
import { AppController } from '@relish/app.controller';
import { AppProvider } from '@relish/services/app.provider';
import { ExternalConfigModule } from '@relish/configuration/modules/config.module';
import { AxiosHttpModule } from '@relish/configuration/modules/app.config.module';

@Module({
    imports: [ExternalConfigModule, AxiosHttpModule],
    controllers: [AppController],
    providers: [AppProvider, AppService],
})
export class AppModule {}

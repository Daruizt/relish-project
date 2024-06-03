import { NestFactory } from '@nestjs/core';
import { AppModule } from '@relish/app.module';
import { DtoValidationPipe } from '@relish/pipes/dto-validation.pipe';
import { HttpExceptionFilter } from '@relish/exception/configuration/error-handling';
import { errorAppRepository } from '@relish/errors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//import { ExternalConfigService } from './configuration/modules/config.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: true });
    app.useGlobalPipes(new DtoValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter(errorAppRepository));
    //const config = app.get(ExternalConfigService);

    const options = new DocumentBuilder()
        .setTitle('Relish')
        .setDescription('The Relish API doc')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('explorer', app, document);
    await app.listen(3000);
}
bootstrap();

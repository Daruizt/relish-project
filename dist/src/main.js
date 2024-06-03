"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dto_validation_pipe_1 = require("./pipes/dto-validation.pipe");
const error_handling_1 = require("./exception/configuration/error-handling");
const errors_1 = require("./errors");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: true });
    app.useGlobalPipes(new dto_validation_pipe_1.DtoValidationPipe());
    app.useGlobalFilters(new error_handling_1.HttpExceptionFilter(errors_1.errorAppRepository));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Relish')
        .setDescription('The Relish API doc')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('explorer', app, document);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map
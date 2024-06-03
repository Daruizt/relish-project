import { Provider } from '@nestjs/common';
import { AppRepository } from '@relish/repositories/app.repository';

export const AppProvider: Provider = {
    provide: 'AppDomainRepository',
    useClass: AppRepository,
};

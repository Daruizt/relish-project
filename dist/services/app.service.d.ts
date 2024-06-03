import { IAppRepository } from '@relish/interfaces/repositories/app-repository.interface';
import { IResponseExternalApi } from '@relish/interfaces/types/external-api-response.type';
export declare class AppService {
    private readonly appRepository;
    constructor(appRepository: IAppRepository);
    getPhotosService(title: string, albumTitle: string, userEmail: string, limit: number, offset: number): Promise<IResponseExternalApi>;
}

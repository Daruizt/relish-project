import { IAppRepository } from '@relish/interfaces/repositories/app-repository.interface';
import { IPhoto } from '@relish/interfaces/types/photos-response-axios.type';
import { IAlbum } from '@relish/interfaces/types/album-response-axios.type';
import { IUser } from '@relish/interfaces/types/user-response-axios.type';
import { ExternalHttpService } from '@relish/configuration/modules/app.config.module';
export declare class AppRepository implements IAppRepository {
    private readonly http;
    constructor(http: ExternalHttpService);
    getPhotosRepository(): Promise<IPhoto[]>;
    getAlbumsRepository(): Promise<IAlbum[]>;
    getUserRepository(): Promise<IUser[]>;
}

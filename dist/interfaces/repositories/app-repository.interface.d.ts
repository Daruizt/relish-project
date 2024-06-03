import { IAlbum } from '@relish/interfaces/types/album-response-axios.type';
import { IPhoto } from '@relish/interfaces/types/photos-response-axios.type';
import { IUser } from '@relish/interfaces/types/user-response-axios.type';
export interface IAppRepository {
    getPhotosRepository(): Promise<IPhoto[]>;
    getAlbumsRepository(): Promise<IAlbum[]>;
    getUserRepository(): Promise<IUser[]>;
}

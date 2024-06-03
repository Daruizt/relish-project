import { IUser } from '@relish/interfaces/types/user-response-axios.type';

export interface IAlbumAxiosResponse {
    data: IAlbum[];
}

export interface IAlbum extends IAlbumCommon {
    userId: number;
}

export interface IAlbumCommon {
    id: number;
    title: string;
}

export interface IAlbumResponse extends IAlbumCommon {
    user: IUser;
}

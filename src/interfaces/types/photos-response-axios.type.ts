import { IAlbumResponse } from '@relish/interfaces/types/album-response-axios.type';

export interface IPhotosAxiosResponse {
    data: IPhoto[];
}

export interface IPhoto extends IPhotoCommon {
    albumId: number;
}

export interface IPhotoCommon {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IPhotoResponse extends IPhotoCommon {
    album: IAlbumResponse;
}

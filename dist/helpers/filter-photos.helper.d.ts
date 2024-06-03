import { IAlbum } from '@relish/interfaces/types/album-response-axios.type';
import { IPhoto, IPhotoResponse } from '@relish/interfaces/types/photos-response-axios.type';
import { IUser } from '@relish/interfaces/types/user-response-axios.type';
declare function filterPhotos(photosResponse: IPhoto[], albumResponse: IAlbum[], userResponse: IUser[], title: string, albumTitle: string, userEmail: string): IPhotoResponse[];
export { filterPhotos };

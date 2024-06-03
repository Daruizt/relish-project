import { IPhotoResponse } from '@relish/interfaces/types/photos-response-axios.type';
declare function paginationPhotos(data: IPhotoResponse[], limit: number, offset: number): IPhotoResponse[];
export { paginationPhotos };

import { IPhotoResponse } from '@relish/interfaces/types/photos-response-axios.type';

export interface IResponseExternalApi {
    limit: number;
    offset: number;
    data: IPhotoResponse[];
}

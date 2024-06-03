import { Inject, Injectable } from '@nestjs/common';
import { filterPhotos } from '@relish/helpers/filter-photos.helper';
import { paginationPhotos } from '@relish/helpers/pagination-photos.helper';
import { IAppRepository } from '@relish/interfaces/repositories/app-repository.interface';
import { IAlbum } from '@relish/interfaces/types/album-response-axios.type';
import { IResponseExternalApi } from '@relish/interfaces/types/external-api-response.type';
import {
    IPhoto,
    IPhotoResponse,
} from '@relish/interfaces/types/photos-response-axios.type';
import { IUser } from '@relish/interfaces/types/user-response-axios.type';

const RepositoryProvider = () => Inject('AppDomainRepository');

@Injectable()
export class AppService {
    constructor(
        @RepositoryProvider()
        private readonly appRepository: IAppRepository,
    ) {}

    public async getPhotosService(
        title: string,
        albumTitle: string,
        userEmail: string,
        limit: number,
        offset: number,
    ): Promise<IResponseExternalApi> {
        const photosResponse: IPhoto[] =
            await this.appRepository.getPhotosRepository();
        const albumResponse: IAlbum[] =
            await this.appRepository.getAlbumsRepository();
        const userResponse: IUser[] =
            await this.appRepository.getUserRepository();

        const filterElement: IPhotoResponse[] = filterPhotos(
            photosResponse,
            albumResponse,
            userResponse,
            title,
            albumTitle,
            userEmail,
        );

        const paginationArray: IPhotoResponse[] = paginationPhotos(
            filterElement,
            limit,
            offset,
        );

        return { limit: limit, offset: offset, data: paginationArray };
    }
}

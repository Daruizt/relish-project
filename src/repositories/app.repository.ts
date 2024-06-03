import { Injectable } from '@nestjs/common';
import { IAppRepository } from '@relish/interfaces/repositories/app-repository.interface';
import { catchError, map, firstValueFrom, tap } from 'rxjs';
import {
    ErrorHandler,
    catchErrorHandler,
} from '@relish/exception/helpers/filter-exceptions.helper';
import { CustomException } from '@relish/exception/models/custom.exception';
import {
    IPhoto,
    IPhotosAxiosResponse,
} from '@relish/interfaces/types/photos-response-axios.type';
import {
    IAlbum,
    IAlbumAxiosResponse,
} from '@relish/interfaces/types/album-response-axios.type';
import {
    IUser,
    IUserAxiosResponse,
} from '@relish/interfaces/types/user-response-axios.type';
import { ExternalHttpService } from '@relish/configuration/modules/app.config.module';

@Injectable()
export class AppRepository implements IAppRepository {
    constructor(private readonly http: ExternalHttpService) {}

    public async getPhotosRepository(): Promise<IPhoto[]> {
        const photosResponse = await firstValueFrom(
            this.http.get<IPhotosAxiosResponse>('/photos').pipe(
                catchError(catchErrorHandler(CustomException)),
                tap(ErrorHandler()),
                map((response) => {
                    return response.data;
                }),
            ),
        );

        return photosResponse;
    }

    public async getAlbumsRepository(): Promise<IAlbum[]> {
        const albumResponse = await firstValueFrom(
            this.http.get<IAlbumAxiosResponse>('/albums').pipe(
                catchError(catchErrorHandler(CustomException)),
                tap(ErrorHandler()),
                map((response) => {
                    return response.data;
                }),
            ),
        );

        return albumResponse;
    }

    public async getUserRepository(): Promise<IUser[]> {
        const userResponse = await firstValueFrom(
            this.http.get<IUserAxiosResponse>('/users').pipe(
                catchError(catchErrorHandler(CustomException)),
                tap(ErrorHandler()),
                map((response) => {
                    return response.data;
                }),
            ),
        );

        return userResponse;
    }
}

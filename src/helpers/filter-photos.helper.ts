import { IAlbum } from '@relish/interfaces/types/album-response-axios.type';
import {
    IPhoto,
    IPhotoResponse,
} from '@relish/interfaces/types/photos-response-axios.type';
import { IUser } from '@relish/interfaces/types/user-response-axios.type';

function filterPhotos(
    photosResponse: IPhoto[],
    albumResponse: IAlbum[],
    userResponse: IUser[],
    title: string,
    albumTitle: string,
    userEmail: string,
): IPhotoResponse[] {
    const albumMap = new Map<number, IAlbum>();
    albumResponse.forEach((album) => albumMap.set(album.id, album));

    const userMap = new Map<number, IUser>();
    userResponse.forEach((user) => userMap.set(user.id, user));

    const filterElement: IPhotoResponse[] = [];

    photosResponse.forEach((photo) => {
        const album = albumMap.get(photo.albumId);
        if (!album) return;

        const user = userMap.get(album.userId);
        if (!user) return;

        const informationPhoto: IPhotoResponse = {
            id: photo.id,
            title: photo.title,
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl,
            album: {
                id: album.id,
                title: album.title,
                user: user,
            },
        };

        if (
            (title && !photo.title.includes(title)) ||
            (albumTitle && !album.title.includes(albumTitle)) ||
            (userEmail && user.email !== userEmail)
        ) {
            return;
        }

        filterElement.push(informationPhoto);
    });
    return filterElement;
}

export { filterPhotos };

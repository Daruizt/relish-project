import { IPhotoResponse } from '@relish/interfaces/types/photos-response-axios.type';

function paginationPhotos(
    data: IPhotoResponse[],
    limit: number,
    offset: number,
): IPhotoResponse[] {
    const totalElements = data.length;
    const totalPages = Math.ceil(totalElements / limit);

    if (offset < 1 || offset > totalPages) {
        return [];
    }

    const startIndex = (offset - 1) * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
}

export { paginationPhotos };

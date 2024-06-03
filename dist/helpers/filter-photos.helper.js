"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPhotos = void 0;
function filterPhotos(photosResponse, albumResponse, userResponse, title, albumTitle, userEmail) {
    const albumMap = new Map();
    albumResponse.forEach((album) => albumMap.set(album.id, album));
    const userMap = new Map();
    userResponse.forEach((user) => userMap.set(user.id, user));
    const filterElement = [];
    photosResponse.forEach((photo) => {
        const album = albumMap.get(photo.albumId);
        if (!album)
            return;
        const user = userMap.get(album.userId);
        if (!user)
            return;
        const informationPhoto = {
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
        if ((title && !photo.title.includes(title)) ||
            (albumTitle && !album.title.includes(albumTitle)) ||
            (userEmail && user.email !== userEmail)) {
            return;
        }
        filterElement.push(informationPhoto);
    });
    return filterElement;
}
exports.filterPhotos = filterPhotos;
//# sourceMappingURL=filter-photos.helper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationPhotos = void 0;
function paginationPhotos(data, limit, offset) {
    const totalElements = data.length;
    const totalPages = Math.ceil(totalElements / limit);
    if (offset < 1 || offset > totalPages) {
        return [];
    }
    const startIndex = (offset - 1) * limit;
    const endIndex = startIndex + limit;
    return data.slice(startIndex, endIndex);
}
exports.paginationPhotos = paginationPhotos;
//# sourceMappingURL=pagination-photos.helper.js.map
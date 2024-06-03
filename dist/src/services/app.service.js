"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const filter_photos_helper_1 = require("../helpers/filter-photos.helper");
const pagination_photos_helper_1 = require("../helpers/pagination-photos.helper");
const RepositoryProvider = () => (0, common_1.Inject)('AppDomainRepository');
let AppService = class AppService {
    constructor(appRepository) {
        this.appRepository = appRepository;
    }
    async getPhotosService(title, albumTitle, userEmail, limit, offset) {
        const photosResponse = await this.appRepository.getPhotosRepository();
        const albumResponse = await this.appRepository.getAlbumsRepository();
        const userResponse = await this.appRepository.getUserRepository();
        const filterElement = (0, filter_photos_helper_1.filterPhotos)(photosResponse, albumResponse, userResponse, title, albumTitle, userEmail);
        const paginationArray = (0, pagination_photos_helper_1.paginationPhotos)(filterElement, limit, offset);
        return { limit: limit, offset: offset, data: paginationArray };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, RepositoryProvider()),
    __metadata("design:paramtypes", [Object])
], AppService);
//# sourceMappingURL=app.service.js.map
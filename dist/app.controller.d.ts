import { AppService } from './services/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getPhotosController(title: string, albumTitle: string, userEmail: string, limit: string, offset: string): Promise<import("./interfaces/types/external-api-response.type").IResponseExternalApi>;
}

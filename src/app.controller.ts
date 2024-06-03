import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { AppService } from './services/app.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiQuery({ name: 'title', required: false })
    @ApiQuery({ name: 'album.title', required: false })
    @ApiQuery({ name: 'album.user.email', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'offset', required: false })
    @Get('/externalapi/photos')
    getPhotosController(
        @Query('title') title: string,
        @Query('album.title') albumTitle: string,
        @Query('album.user.email') userEmail: string,
        @Query('limit', new DefaultValuePipe('25')) limit: string,
        @Query('offset', new DefaultValuePipe('1')) offset: string,
    ) {
        return this.appService.getPhotosService(
            title,
            albumTitle,
            userEmail,
            parseInt(limit),
            parseInt(offset),
        );
    }

    @Get()
    getHelloWorldController() {
        return 'hello World';
    }
}

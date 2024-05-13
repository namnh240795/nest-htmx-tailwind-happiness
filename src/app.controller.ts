import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return this.appService.getHello();
  }

  @Get('/mini')
  @Render('mini')
  getMini() {
    return this.appService.getHello();
  }
}

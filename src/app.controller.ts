import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.sendFile('index.html', { root: 'views' });
  }

  @Get('/mini')
  getMini(@Res() res: Response) {
    return res.sendFile('mini.html', { root: 'views' });
  }
}

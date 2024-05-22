import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
  }

  @Get('/mini')
  @Render('mini')
  getMini() {
    
  }

  @Get('/authorized')
  @Render('authorized')
  getAuthorized() {
    
  }

  @Get('/unauthorized')
  @Render('unauthorized')
  getUnauthorized() {
    
  }
}

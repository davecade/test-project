import { Controller, Get, Req, Res } from '@nestjs/common';;
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { join } from 'path';

@Controller('*')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Req() req: Request, @Res() res: Response): void {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}

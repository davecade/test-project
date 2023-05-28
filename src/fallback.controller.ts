import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { join } from 'path';

@Controller('*')
export class FallbackController {
  @Get()
  root(@Req() req: Request, @Res() res: Response): void {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  }
}
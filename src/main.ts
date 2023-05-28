import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(express.static(join(__dirname, '..', 'client', 'build'))); // Serve the React build files
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
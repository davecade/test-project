import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  
  // Serve static files from the /client/build directory
  app.useStaticAssets(join(__dirname, '..', 'client', 'build'), {
    index: false, // Don't respond to route "/"
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
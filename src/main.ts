import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = express();
  app.use(cors());
  
  if (process.env.NODE_ENV === 'production') {
    server.use(express.static(join(__dirname, '..', 'client', 'build')));

    server.get('*', (req, res) => {
      res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
    });

    app.use(server);
  }

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
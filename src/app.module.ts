import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path'
import { ServeStaticModule } from '@nestjs/serve-static'
import { FallbackController } from './fallback.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build'),
    }),
  ],
  controllers: [AppController, FallbackController],
  providers: [AppService],
})
export class AppModule {}

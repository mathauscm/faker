import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FakerModule } from './faker.module.js';

@Module({
  imports: [FakerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

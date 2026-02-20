import { Module, ValidationPipe } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/logs_db?authSource=admin',
    ),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingController],
  providers: [
    LoggingService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class LoggingModule {}

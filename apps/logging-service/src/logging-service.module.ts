import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // initializing a dynamic module for Mongoose.
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/logs_db')],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}

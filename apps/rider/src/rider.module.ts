import { Module } from '@nestjs/common';
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';
import { RiderControllerController } from './rider-controller/rider-controller.controller';

@Module({
  imports: [],
  controllers: [RiderController, RiderControllerController],
  providers: [RiderService],
})
export class RiderModule {}

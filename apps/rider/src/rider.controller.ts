import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return this.riderService.getHello();
  }

  @Get()
  getRiderById(@Param() params: any) {
    // In real world we will have a DB and we will fetch it from DB.
    return {
      _id: params.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jan@gmail.com',
    };
  }
}

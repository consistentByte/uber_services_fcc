import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return 'Hello World';
  }

  // any microservice can access the data from another microservice using this pattern. this is the consumer of microservice
  @MessagePattern({ cmd: 'get-rider' })
  getRiderById(data: any) {
    // In real world we will have a DB and we will fetch it from DB.
    return {
      _id: data.id,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jan@gmail.com',
    };
  }

  // @Get()
  // getRiderById(@Param() params: any) {
  //   // In real world we will have a DB and we will fetch it from DB.
  //   return {
  //     _id: params.id,
  //     firstName: 'Jane',
  //     lastName: 'Doe',
  //     email: 'jan@gmail.com',
  //   };
  // }
}

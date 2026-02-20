import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'Hello From Rider Coordinates';
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
    return createCoordinatesDTO;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private rCS: RiderCoordinatesService) {}

  @Get()
  getRiderCoordinates() {
    return this.rCS.getRiderCoordinates();
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
    return this.rCS.saveRiderCoordinates(createCoordinatesDTO);
  }
}

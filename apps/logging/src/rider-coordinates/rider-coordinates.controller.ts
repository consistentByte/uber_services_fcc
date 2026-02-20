import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private rCS: RiderCoordinatesService) {}

  @Get(':id')
  getRiderCoordinates(@Param('id') id: string) {
    console.log(id);
    return this.rCS.getRiderCoordinates(id);
  }

  @Post()
  saveRiderCoordinates(@Body() createCoordinatesDTO: CreateCoordinatesDTO) {
    return this.rCS.saveRiderCoordinates(createCoordinatesDTO);
  }
}

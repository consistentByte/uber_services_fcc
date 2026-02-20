import { Injectable } from '@nestjs/common';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private riderCoordinateModel: Model<RiderCoordinate>,
  ) {}

  async saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinateModel.create(createCoordinatesDTO);
  }
}

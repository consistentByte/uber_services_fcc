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

  async getRiderCoordinates() {
    // we are using microservices we cannot use direct populate the rider,
    // since it will me managed by different microservice connected with different db,
    // so we need to communicate with different microservice using the rider id which we stored,

    // communication can happen in sync or async mode
    // using TCP, RabbitMQ, Kafka, Nats etc.
    return this.riderCoordinateModel.find();
  }

  async saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDTO) {
    return await this.riderCoordinateModel.create(createCoordinatesDTO);
  }
}

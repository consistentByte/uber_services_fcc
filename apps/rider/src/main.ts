import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderModule);
  // await app.listen(process.env.port ?? 3000);

  // telling Rider sub-app to act like a microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();

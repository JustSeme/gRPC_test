import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DogsModule } from './dogs.module';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(DogsModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:5001',
            package: 'dogs',
            protoPath: './apps/dogs-service/proto/dogs.proto',
        }
    })

    await app.listen()
}
bootstrap() 
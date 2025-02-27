import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CatsModule } from './cats.module';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(CatsModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:5000',
            package: 'cats',
            protoPath: './apps/cats-service/proto/cats.proto',
        }
    })

    await app.listen()
}
bootstrap() 
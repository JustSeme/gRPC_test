import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CatsModule } from './cats.module';
import * as path from 'path'

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(CatsModule, {
        transport: Transport.GRPC,
        options: {
            url: 'localhost:5000',
            package: 'cats',
            protoPath: path.join(path.__dirname, '../proto/example.proto')
        }
    })

    await app.listen()
}
bootstrap()
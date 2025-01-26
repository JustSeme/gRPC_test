import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { DogsService } from './dogs.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'DOGS_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    url: 'localhost:5001',
                    package: 'dogs',
                    protoPath: './apps/dogs-service/proto/dogs.proto',
                    loader: {
                        keepCase: true,
                        longs: String,
                        enums: String,
                        defaults: true,
                        oneofs: true
                    }
                }
            },
            {
                name: 'CATS_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    url: 'localhost:5000',
                    package: 'cats',
                    protoPath: './apps/cats-service/proto/cats.proto',
                    loader: {
                        keepCase: true,
                        longs: String,
                        enums: String,
                        defaults: true,
                        oneofs: true
                    }
                }
            }
        ])
    ],
    providers: [DogsService]
})
export class DogsModule {}
import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { CatsService } from './cats.service';
import { join } from 'path';

@Module({
    imports: [
        ClientsModule.register([
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
    providers: [CatsService]
})
export class CatsModule {}
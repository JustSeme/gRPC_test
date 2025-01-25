import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { CatsService } from './cats.service';
import * as path from 'path'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CATS_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    url: 'localhost:5000',
                    package: 'cats',
                    protoPath: path.join(path.__dirname, '../proto/example.proto')
                }
            }
        ])
    ],
    providers: [CatsService]
})
export class CatsModule {}
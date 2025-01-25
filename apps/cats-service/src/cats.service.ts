import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class CatsService {
    //@GrpcMethod('CatsService', 'GetCats')
    GetCats(request: { page: string }): { catsCount: string } {
        return { catsCount: `Cats count on page ${request.page} is 217` };
    }
}
import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface GetCatsRequest {
    page: string;
}
interface GetCatsResponse {
    catsCount: string;
}

@Injectable()
export class CatsService {
    @GrpcMethod('CatsService', 'getCatsCount')
    getCatsCount(request: GetCatsRequest): GetCatsResponse {
        return { catsCount: `Cats count on page ${request.page} is 217` };
    }
}
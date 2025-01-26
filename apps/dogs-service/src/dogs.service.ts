import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { interval, map, take } from 'rxjs';

interface StreamRequest {
    query: string;
}

interface StreamResponse {
    result: string;
}

interface CatsService {
    getCatsCount(request: { page: string }): Observable<{ catsCount: string }>;
}

export class DogsService implements OnModuleInit {
    private catsService: CatsService

    constructor(@Inject('CATS_PACKAGE') private client: ClientGrpc) {}
    
    async onModuleInit() {
        this.catsService = this.client.getService<CatsService>('CatsService');
        this.catsService.getCatsCount({ page: '1' }).subscribe(data => console.log(data.catsCount))
    }

    @GrpcStreamMethod('DogsService', 'GetDataStream')
    getDataStream(data: StreamRequest): Observable<StreamResponse> {
    const { query } = data;

    return interval(1000).pipe(
        take(10),
        map((index) => ({
            result: `Data chunk ${index + 1} for query: ${query}`,
        })),
        );
    }
}
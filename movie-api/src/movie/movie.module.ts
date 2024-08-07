import { Module } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { WookieApiClient } from '../wookie-api/services/wookie-api.client';
import { MovieResolver } from './resolvers/movie.resolver';

@Module({
  imports: [],
  providers: [
    { provide: 'MOVIE_EXTERNAL_SERVICE', useClass: WookieApiClient },
    { provide: 'MOVIE_SERVICE', useClass: MovieService }, 
    MovieResolver
  ]
})
export class MovieModule {}

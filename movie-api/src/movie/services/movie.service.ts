import { Inject, Injectable } from '@nestjs/common';
import { IMovieService } from './movie.service.interface';
import { MovieReponseDto } from '../../movie-response.dto';
import { ResponseDto } from '../dtos/response.dto';
import { IMovieExternalApi } from 'src/movie-external-api.interface';

@Injectable()
export class MovieService implements IMovieService {
    public constructor (
        @Inject("MOVIE_EXTERNAL_SERVICE")
        private readonly wookieApiClient: IMovieExternalApi
    ) { }

    public async findAll(): Promise<ResponseDto> {
        const moviesFromApi = await this.wookieApiClient.findAll();

        const movieGenres = moviesFromApi.map((movie) => movie.genres).flat(1);
        const uniqueGenres = new Set<string>(movieGenres.map((genres) => genres));

        const movies = moviesFromApi.map((movie) => new MovieReponseDto(movie));

        return { genres: Array.from(uniqueGenres), movies: movies};
    }

    public async findByTitle(title: string): Promise<ResponseDto> {
        if (title) {
            const moviesFromApi = await this.wookieApiClient.findByTitle(title);

            const movies = moviesFromApi.map((movie) => new MovieReponseDto(movie));

            return { genres: [], movies: movies };
        }

        throw new Error("Title not must be empty");
    }
}

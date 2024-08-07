import { Args, Query, Resolver } from "@nestjs/graphql";
import { MovieTitleArgs } from "../dtos/movie-title-args.dto";
import { MovieReponseDto } from "../../movie-response.dto";
import { ResponseDto } from "../dtos/response.dto";
import { IMovieService } from "../services/movie.service.interface";
import { Inject } from "@nestjs/common";

@Resolver()
export class MovieResolver {
    public constructor(
        @Inject('MOVIE_SERVICE')
        private readonly movieService: IMovieService
    ) {}

    @Query(returns => ResponseDto)
    public async searchAll() {
        return this.movieService.findAll();
    }

    @Query(returns => ResponseDto)
    public async searchByTitle(@Args() args: MovieTitleArgs) {
        return this.movieService.findByTitle(args.title);
    }
}
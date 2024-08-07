import { MovieReponseDto } from "./movie-response.dto";

export interface IMovieExternalApi {
    findAll(): Promise<MovieReponseDto[]>;
    findByTitle(title: string): Promise<MovieReponseDto[]>;
}
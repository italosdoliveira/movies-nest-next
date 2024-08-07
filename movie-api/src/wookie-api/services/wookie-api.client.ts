import { Injectable } from "@nestjs/common";
import axios from "axios";
import { MovieReponseDto } from "../../movie-response.dto";
import { IMovieExternalApi } from "../../movie-external-api.interface";

@Injectable()
export class WookieApiClient implements IMovieExternalApi {
    private baseUrl = 'https://wookie.codesubmit.io/movies' 

    public async findAll(): Promise<MovieReponseDto[]> {
        const response = await axios.get(`${this.baseUrl}`, {
            headers: {
                "Authorization": "Bearer Wookie2021",
                "Accept": 'application/json',
                "Content-Type": "application/json"
            }
        });
        const data = await response.data.movies;
        const movies: MovieReponseDto[] = data.map((movie) => new MovieReponseDto(movie));

        return movies;
    }

    public async findByTitle(title: string): Promise<MovieReponseDto[]> {
        const response = await axios.get(`${this.baseUrl}?q=${title}`, {
            headers: {
                "Authorization": "Bearer Wookie2021",
                "Accept": 'application/json',
                "Content-Type": "application/json"
            }
        });
        const data = await response.data.movies;

        const movies: MovieReponseDto[] = data.map((movie) => new MovieReponseDto(movie));

        return movies;
    }
}
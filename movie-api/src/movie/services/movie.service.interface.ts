import { MovieReponseDto } from "../../movie-response.dto";
import { ResponseDto } from "../dtos/response.dto";

export interface IMovieService {
    findAll(): Promise<ResponseDto>;
    findByTitle(title: string): Promise<ResponseDto>;
}
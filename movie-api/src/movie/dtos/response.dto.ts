import { Field, ObjectType } from "@nestjs/graphql";
import { MovieReponseDto } from "../../movie-response.dto";

@ObjectType()
export class ResponseDto {
   @Field(type => [String])   
   public genres: string[];
   
   @Field(() => [MovieReponseDto])
   public movies: MovieReponseDto[]; 
}
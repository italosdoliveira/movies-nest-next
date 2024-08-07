import { Field, Int, ObjectType } from '@nestjs/graphql';

export type MovieReponse = {
    id: string;
    title: string;
    poster: string;
    released_on: string;
    genres: string[];
    overview: string;
}

@ObjectType()
export class MovieReponseDto {
    @Field()
    public id: string;

    @Field()
    public title: string;
    
    @Field()
    public poster: string;
    
    @Field()
    public released_on: string;

    @Field(type => String)
    public get releasedOn(): string {
        return this.released_on;
    }
    
    @Field(type => [String])
    public genres: string[];
    
    @Field()
    public overview: string;

    public constructor (initialValues?: Partial<MovieReponse>) {
        const { id, title, poster, released_on, genres, overview, ...spread} = initialValues;

        Object.assign(this, { id, title, poster, released_on, genres, overview});
    }
}
import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class MovieTitleArgs {
    @Field()
    public title: string;
}
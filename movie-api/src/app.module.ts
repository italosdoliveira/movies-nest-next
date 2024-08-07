import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { WookieApiModule } from './wookie-api/wookie-api.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    WookieApiModule,
    MovieModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      include: [WookieApiModule, MovieModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

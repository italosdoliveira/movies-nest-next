import { headers } from "next/headers";
import { gql } from '@apollo/client';
import { getClient } from './graphql/client';
import GenreRow from '../components/genre-row/genre-row';
import './page.css';
import MovieCard from "@/components/movie-card";
import SearchForm from "@/components/search-form/search-form";

const queryByTItle = gql`
  query searchByTitle($title: String!) {
    searchByTitle(title: $title) {
      movies {
        id
        title
        poster
        releasedOn
        genres
        overview
      }
    }
  }
`

const queryAll = gql`
  query {
    searchAll {
      genres
      movies {
        id
        title
        poster
        releasedOn
        genres
        overview
      }
    }
  }
`;

let genres = [];
let movies = [];
const client = getClient();

const getAll = async () => {
  const { data } = await client.query({query: queryAll});

  return data;
}

const getByTitle = async (title) => {
  const { data } = await client.query({query: queryByTItle, variables: { title }});

  return data;
}

export default async function Home({searchParams}) {
  let graphqlQueryName = "";
  let data = null;
  
  if(searchParams.title) {
    graphqlQueryName = "searchByTitle";
    data = await getByTitle(searchParams.title);
  } else {
    graphqlQueryName = "searchAll";
    data = await getAll();
  }

  const moviesAndGenres = data[graphqlQueryName];
  genres = moviesAndGenres.genres;
  movies =  moviesAndGenres.movies;

  if (genres) {
    return (
      <div>
        <SearchForm />
        <div>
          {genres.map(genre => 
            <GenreRow 
              key={genre} 
              id={`genre-${genre}`} 
              genreName={genre} 
              movies={movies} 
            />)}
        </div>  
      </div>
    );
  }
  
  if (!genres && movies) {
    return (
      <div>
        <SearchForm />
        <div className="container mx-auto flex ">
          {movies.map((movie) => 
            <MovieCard
              key={movie.id}
              poster={movie.poster} 
              title={movie.title} 
              overview={movie.overview}
            />
          )}
        </div>
      </div>
    );
  }

  return <h1>Blal</h1>
}
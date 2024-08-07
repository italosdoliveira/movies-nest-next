import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';
import { IMovieService } from './movie.service.interface';
import { MovieReponseDto } from '../../movie-response.dto';

const mockClient = {
  findAll: jest.fn(),
  findByTitle: jest.fn()
} 

describe('MovieService', () => {
  let service: IMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: "MOVIE_EXTERNAL_SERVICE", useValue: mockClient},
        MovieService
      ]
    }).compile();

    service = module.get<IMovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Must return a list of movies', async() => {
    const mockMovies: MovieReponseDto[] = [
      new MovieReponseDto({
        id: "sssxxass",
        title: "Movie 1", 
        poster: "img.jpg",
        released_on: "1996",
        genres: ["Drama"],
        overview: ""
      }), 
      new MovieReponseDto({
        id: "sssxxasz",
        title: "Movie 2", 
        poster: "img.jpg",
        released_on: "1996",
        genres: ["Comedia"],
        overview: ""
      })
    ]
    
    jest.spyOn(mockClient, 'findAll').mockResolvedValueOnce(mockMovies);

    const result = await service.findAll();

    expect(result).toEqual({
      genres: ["Drama", "Comedia"],
      movies: [
        new MovieReponseDto({
          id: "sssxxass",
          title: "Movie 1", 
          poster: "img.jpg",
          released_on: "1996",
          genres: ["Drama"],
          overview: ""
        }), 
        new MovieReponseDto({
          id: "sssxxasz",
          title: "Movie 2", 
          poster: "img.jpg",
          released_on: "1996",
          genres: ["Comedia"],
          overview: ""
        })
      ] as MovieReponseDto[]
    })
  })

  describe('Should return a list of movies filtered by title', () => {
    it('Should return a list of movies', async() => {
      const mockMovies: MovieReponseDto[] = [
        new MovieReponseDto({
          id: "sssxxass",
          title: "Movie 1", 
          poster: "img.jpg",
          released_on: "1996",
          genres: ["Drama"],
          overview: ""
        })
      ]
      
      jest.spyOn(mockClient, 'findByTitle').mockResolvedValueOnce(mockMovies);
  
      const result = await service.findByTitle("sssxxass");
  
      expect(result).toEqual({
        genres: [],
        movies: [
          new MovieReponseDto({
            id: "sssxxass",
            title: "Movie 1", 
            poster: "img.jpg",
            released_on: "1996",
            genres: ["Drama"],
            overview: ""
          })
        ] as MovieReponseDto[]
      })
    })

    it('Should throw error if title is empty', async () => {
      expect(async () => await service.findByTitle("") ).rejects.toThrow();
    })
  })
});

'use client'

import MovieCard from '../movie-card';
import './genre-row.css';

export default function GenreRow({
    id,
    genreName,
    movies,
}){
    const scrollToLeft = (id) => {
        var element = document.getElementById(id);

        element.scrollTo({
            left:element.scrollLeft - 200,
            top: 0,
            behavior: "smooth"
        });
    }
    
    const scrollToRight = (id) => {
        var element = document.getElementById(id);

        element.scrollTo({
            left:element.scrollLeft + 200,
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="genre-row container mx-auto">
            <h2>{ genreName }</h2>
            <div>
                <button onClick={() => scrollToLeft(id)} className="left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
                </button>
                <button onClick={() => scrollToRight(id)} className="right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                    </svg>
                </button>
            </div>
            <div id={id} className="genre-row-movies">
                {movies && 
                movies
                    .filter(movie => movie.genres.includes(genreName))
                    .map(movie => 
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
import { useState, useEffect } from "react"; //importing useState from React
import { MovieCard } from "../movie-card/movie-card"; //importing movie card display
import { MovieView } from "../movie-view/movie-view"; //importing view of movies

// Main component (we will eventually use all the others)
export const MainView = () => {
    const [movies, setMovies] = useState ([]);

    const [selectedMovie, setSelectedMovie] = useState(null); //state for selected movie
    useEffect(() => {
        fetch('https://salty-temple-07534-fcfeb8dd028b.herokuapp.com/movies')
        .then((res) => res.json())
        .then((data) => {
            const moviesFromApi = data.docs.map((doc) => {
                return {
                    title: doc.title,
                    image: doc.image,
                    director: doc.director,
                    genre: doc.genre
                }
            });
            
            setMovies(moviesFromApi)
        });
    }, []);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>There is nothing on the list</div>
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};
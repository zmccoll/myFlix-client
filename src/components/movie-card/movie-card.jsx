export const MovieCard = ({ movie, onClick }) => {
    return (
        <div
        onClick ={() => {
            onMovieClick(movie);
        }}
        >
            {movie.title}
        </div>
    )
}
export const MovieView = ({ movie }) => {
    return (
        <div>
                    <div>
            <img src={movie.image} />
        </div>
        <div>
            <span>Title</span>
            <span>{movie.title}</span>
        </div>
        <div>
            <span>Director</span>
            <span>{movie.director}</span>
        </div>
        </div>

    );
};
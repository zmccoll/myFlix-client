export const MovieView = ({ movie, onBackClick }) => { //this deals with how the movies will be displayed when they get clicked on
    return (
        <div>
            <div>
                <img src={movie.image} />
            </div>
            <div>
                <span>Title:</span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Description:</span>
                <span>{movie.Description}</span>
            </div>
            <div>
                <span>Genre:</span>
                <span>{movie.Genre.name}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>{movie.Director.name}</span>
            </div>
            <div>
                <button onClick={onBackClick}>Back</button>
            </div>
        </div>

    );
};
import { createRoot } from 'react-dom/client';
//import { MainView } from './comonents/main-view/main-view'

// Import statement to indcate that you need to bundle `./index.scss`
import './index.scss';

// Main component (we will eventually use all the others)
const MainView = () => {
    const [movies, setMovies] = useState ([
        {
            id: 1,
            title: "Titanic",
            image: "data:image/jpeg;base64,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",
            director: "James Cameron"
        },
        {
            id: 2,
            title: "The Dark Knight",
            image: "data:image/jpeg;base64,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",
            director: "Christopher Nolan"
        },
        {
            id: 3,
            title: "Jurassic Park",
            image: "data:image/jpeg;base64,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",
            director: "Steven Spielberg"
        }
    ])

    if (movies.length === 0) {
        return <div>There is nothing on the list</div>
    }

    return (
        <div>
            {movies.map((movie) => {
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                />
            })}
        </div>
    )
}

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MainView />);
import { createRoot } from 'react-dom/client';

// Import statement to indcate that you need to bundle `./index.scss`
import './index.scss';

// Main component (we will eventually use all the others)
const myFlixApplication = () => {
    return (
        <div class='my-flix'>
            <div>Good morning</div>
        </div>
    );
};

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
// movies.jsx
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/movies')({
    component: Movies,
})

function Movies() {
    // Assuming you have an array of movies
    const movies = [
        {
            id: 1,
            title: 'Movie 1',
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Movie 2',
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            title: 'Movie 3',
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 4,
            title: 'Movie 1',
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            title: 'Movie 2',
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 6,
            title: 'Movie 3',
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ]

    return (
        <div className="page-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <li key={movie.id} className="movie-item">
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
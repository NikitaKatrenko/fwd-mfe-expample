// watchlist.jsx
import { createFileRoute, redirect } from '@tanstack/react-router'
import {isAuthenticated} from "../utils/auth";


//AUTHENTICATED ROUTE WITH GUARD
export const Route = createFileRoute('/watchlist')({
    //додати після context.authentication в main.tsx
    //beforeLoad: ({ context }) => {
    beforeLoad: ({ context }) => {
        //add context.authentication in main.tsx
        const { isLogged } = context.authentication;

        if (!isAuthenticated()) {
        // if (!isLogged()) {
            throw redirect({
                to: "/login",
            });
        }
    },
    component: Watchlist,
})

function Watchlist() {
    // Dummy data for the watchlist
    const watchlist = [
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
    ]

    return (
        <div className="page-container">
            <h2>Your Watchlist</h2>
            <div className="watchlist-container">
                {watchlist.map((movie) => (
                    <div key={movie.id} className="watchlist-item">
                        <img src={movie.imageUrl} alt={movie.title} />
                        <div className="watchlist-item-details">
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
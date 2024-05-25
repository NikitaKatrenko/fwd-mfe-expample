import {create} from 'zustand';
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY
const api = axios.create({baseURL: BASE_URL});

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

export const useWatchlistStore = create((set, get) => ({
    watchlist: [],
    addToWatchlist: async (movie) => {
        const {watchlist} = get();
        if (!watchlist.some((m) => m.id === movie.id)) {
            try {
                // Make a POST request to the API endpoint to add the movie to the watchlist
                const response = await api.post(
                    'account/21271511/watchlist',
                    {"media_type": "movie", "media_id": movie.id, "watchlist": true},
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                        },
                    }
                    );

                // If the API request is successful, update the local watchlist state
                if (response.status === 201) {
                    set({watchlist: [...watchlist, movie]});
                } else {
                    // Handle the error case
                    console.error('Failed to add movie to watchlist:', response.data);
                }
            } catch (error) {
                console.error('Error adding movie to watchlist:', error);
            }
        }
    },
    removeFromWatchlist: async (movieId) => {
        try {
            // Make a DELETE request to the API endpoint to remove the movie from the watchlist
            const response = await api.post(
                'account/21271511/watchlist',
                {"media_type": "movie", "media_id": movieId, "watchlist": false},
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                    },
                }
            );

            // If the API request is successful, update the local watchlist state
            if (response.status === 200) {
                set((state) => ({
                    watchlist: state.watchlist.filter((movie) => movie.id !== movieId),
                }));
            } else {
                // Handle the error case
                console.error('Failed to remove movie from watchlist:', response.data);
            }
        } catch (error) {
            console.error('Error removing movie from watchlist:', error);
        }
    },
    clearWatchlist: () => set({watchlist: []}),
    isInWatchlist: (movieId) => get().watchlist.some((movie) => movie.id === movieId),
}));

export const useGetData = create((set) => ({
    ...initialState,

    execute: async () => {
        set({...initialState, loading: true});
        try {
            const res = await api.get('movie/popular', {
                params: {api_key, include_adult: false, language: 'en-US'}
            });
            set({...initialState, success: true, data: res.data.results});
        } catch (err) {
            console.error("Error in data fetch:", err);
            set({...initialState, error: true, errorData: err.message});
        }
    },
}));

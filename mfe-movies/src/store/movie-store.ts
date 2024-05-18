import create from 'zustand';
import axios from "axios";

console.log(import.meta.env)

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY
const api = axios.create({ baseURL: BASE_URL });

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

export const useWatchlistStore = create((set) => ({
    watchlist: [],
    addToWatchlist: (product) => set((state) => ({ watchlist: [...state.watchlist, product] })),
    removeFromWatchlist: (movieId) => set((state) => ({
        watchlist: state.watchlist.filter((movie) => movie.id !== movieId),
    })),
    clearWatchlist: () => set ({ watchlist: [] }),
}));

export const useGetData = create((set, get) => ({
    ...initialState,

    execute: async () => {
        set({ ...initialState, loading: true });
        try {
            const res = await api.get('movie/popular', {
                params: { api_key, include_adult: false, language: 'en-US' }
            });
            set({ ...initialState, success: true, data: res.data.results });
        } catch (err) {
            console.error("Error in data fetch:", err);
            set({ ...initialState, error: true, errorData: err.message });
        }
    },
}));

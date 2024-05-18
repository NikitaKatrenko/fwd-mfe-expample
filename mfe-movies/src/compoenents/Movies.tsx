import React, { useEffect } from "react";
import "./Movies.css";
import {useWatchlistStore, useGetData} from "../store/movie-store";

const Movies = () => {
    const { addToWatchlist } = useWatchlistStore((state) => ({
        addToWatchlist: state.addToWatchlist,
    }));
    const getData = useGetData();

    useEffect(() => {
        getData.execute();
    }, []);

    return (
        <div className="movie-list">
            {(getData.data as any)?.map((movie) => (
                <div key={movie.id} className="card style_1">
                    <div className="image">
                        <div className="wrapper">
                            <a className="image" href={`/movie/${movie.id}`} title={movie.title}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    className="movie-poster"
                                    alt={movie.title}
                                />
                            </a>
                        </div>
                        <div className="options">
                            <a className="no_click" href="#"><div className="glyphicons_v2 circle-more white"></div></a>
                        </div>
                    </div>
                    <div className="content">
                        <h2><a href={`/movie/${movie.id}`} title={movie.title}>{movie.title}</a></h2>
                        <p>{movie.overview}</p>
                        <button onClick={() => addToWatchlist(movie)}>
                            Add to Watchlist
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Movies;

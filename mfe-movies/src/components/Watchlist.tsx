import "./Watchlist.css";
import { useWatchlistStore } from "../store/movie-store";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist, clearWatchlist } = useWatchlistStore(
    (state) => ({
      watchlist: state.watchlist,
      removeFromWatchlist: state.removeFromWatchlist,
      clearWatchlist: state.clearWatchlist,
    })
  );

  console.log(watchlist);

  return (
    <div className="watchlist">
      <h3>Watchlist</h3>
      {watchlist?.map((movie) => (
        <div key={movie.id} className="watchlist-item">
          <h4>{movie.title}</h4>
          <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
        </div>
      ))}
      {watchlist.length > 0 && (
        <button className="clear-watchlist" onClick={clearWatchlist}>
          Clear Watchlist
        </button>
      )}
    </div>
  );
};

export default Watchlist;

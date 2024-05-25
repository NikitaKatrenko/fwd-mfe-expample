import React from "react";

const Watchlist = () => {
  const [watchlist, setWatchlist] = React.useState([]);

  React.useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual TMDb API key
    const apiKey = import.meta.env.VITE_API_KEY;

    // Replace 'YOUR_ACCOUNT_ID' with your actual TMDb account ID
    const accountId = "YOUR_ACCOUNT_ID";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    };

    // Make the API request to fetch the watchlist data
    fetch(
      `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${apiKey}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setWatchlist(data.results);
      })
      .catch((error) => {
        console.error("Error fetching watchlist:", error);
      });
  }, []);

  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;

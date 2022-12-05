import React from "react";

function MovieCard({ titles, posterSrc, genres }) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={titles} />
      <h2>{titles}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;

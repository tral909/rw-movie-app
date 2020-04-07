import React from "react";

const MovieItem = (props) => {
  const { movie, removeMovie, addMovieToWillWatch } = props;
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top card-img--height"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Рейтинг: {movie.vote_average}</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addMovieToWillWatch.bind(null, movie)}
          >
            Will Watch
          </button>
        </div>
        <button onClick={removeMovie.bind(null, movie)}>Remove movie</button>
      </div>
    </div>
  );
};

export default MovieItem;

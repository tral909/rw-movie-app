import React from "react";

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      willWatch: false
    }
  }

  render() {
    const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;

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
            {this.state.willWatch ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  });
                  removeMovieFromWillWatch(movie);
                }}
              >
                Remove Will Watch
              </button>
            ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    this.setState({
                      willWatch: true
                    });
                    addMovieToWillWatch(movie);
                  }}
                >
                  Add Will Watch
              </button>
              )}
          </div>
          <button onClick={removeMovie.bind(null, movie)}>Remove movie</button>
        </div>
      </div>
    );
  }
}


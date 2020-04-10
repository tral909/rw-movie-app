import React from "react";
import "../styles.scss";
//import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from "./MovieTabs"

// UI = fn(state, props)

class MoviesList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],//moviesData
      moviesWillWatch: [],
      sort_by: "revenue.desc"
    };

    //this.removeMovie = this.removeMovie.bind(this);
    console.log('constructor')
  }

  /*async*/ componentDidMount() {
    //const _this = this
    console.log('didmount')
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&`).then(data => {
      return data.json()
      //}).then(function(resp) {
    }).then(resp => {
      console.log(resp)
      this.setState({
        movies: resp.results
      })
    })

    //или так

    // let promise = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`);
    // let json = await promise.json()
    // //console.log(json);
    // this.setState({
    //   movies: json.results
    // })
  }

  //removeMovie(movie) { или через arrow function
  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies,
    });
  };

  addMovieToWillWatch = movie => {
    // const updateMovies = [...this.state.moviesWillWatch];
    // updateMovies.push(movie); или

    const updateMovies = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMovies
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  }

  render() {
    console.log('render')
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4 mt-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default function App() {
  return <MoviesList />;
}

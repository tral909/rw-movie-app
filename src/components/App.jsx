import React from "react";
import "../styles.scss";
//import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from "./MovieTabs";
import Pagination from "./Pagination";

// UI = fn(state, props)

class MoviesList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],//moviesData
      moviesWillWatch: [],
      sort_by: "revenue.desc",
      total_pages: 0,
      page: 1
    };

    //this.removeMovie = this.removeMovie.bind(this);
    console.log('constructor')
  }

  componentDidMount() {
    //const _this = this
    console.log('App didmount')

    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App didupdate")
    console.log("prev", prevProps, prevState)
    console.log("this", this.props, this.state)
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  /* async */ getMovies = () => {
    //const _this = this
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`).then(data => {
      return data.json()
      //}).then(function(resp) {
    }).then(resp => {
      console.log(resp)
      this.setState({
        total_pages: resp.total_pages,
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

  paginateBack = () => {
    if (this.state.page > 1) {
      this.setState(
        (state, props) => {
          return { page: --state.page }
        },
        () => this.getMovies()
      )
    }
  }

  paginateNext = () => {
    if (this.state.page < this.state.total_pages) {
      this.setState(
        (state, props) => {
          return { page: ++state.page }
        },
        () => this.getMovies()
      )
    }
  }

  render() {
    console.log('App render')
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
            <Pagination
              page={this.state.page}
              total_pages={this.state.total_pages}
              paginateBack={this.paginateBack}
              paginateNext={this.paginateNext}
            />
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div >
    );
  }
}

export default function App() {
  return <MoviesList />;
}

import React from "react";
import "./styles.css";
import { moviesData } from "./moviesData";
import MovieItem from "./MovieItem";

const movie = {
  vote_count: 4592,
  id: 299536,
  video: false,
  vote_average: 8.5,
  title: "Avengers: Infinity War",
  popularity: 160.36938,
  poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  original_language: "en",
  original_title: "Avengers: Infinity War",
  backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  adult: false,
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
  release_date: "2018-04-25",
};

function Image(props) {
  console.log(props);
  return <img width="100%" src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log(props);
//   return (
//     <div>
//       <Image
//         src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
//         alt="title"
//       />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }

class TestHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      liked: false,
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  toggleLike = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    const {
      data: { title, vote_average, backdrop_path, poster_path, overview },
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
          alt="title"
        />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            //style={{ background: this.state.liked ? "blue" : "white" }}
            onClick={this.toggleLike}
            className={`w100 ${this.state.liked ? "btn--like" : ""}`}
          >
            Like
          </button>
        </div>
        {this.state.show === true ? <p>{overview}</p> : null}
      </div>
    );
  }
}

class MoviesList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    };

    //this.removeMovie = this.removeMovie.bind(this);
  }

  //removeMovie(movie) { или через arrow function
  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies
    })
  }

  render() {
    return this.state.movies.map((movie) => {
      return (
      <div>
        { this.state.movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              removeMovie={this.removeMovie}/>
          )
        }) }
      </div>
      );
    });
  }
}

export default function App() {
  return (
    <div className="App" style={{ width: "300px" }}>
      <TestHeader key={movie.id} data={movie} />
      <MoviesList />
    </div>
  );
}

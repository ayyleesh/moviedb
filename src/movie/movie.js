import React from "react";
import {Link} from "react-router-dom";
import "./movie.css";
import LoadingMovie from "./loadingmovie";

class Movie extends React.Component {
  state = {
    isLoading: true,
    movie:{}
  }

  componentDidMount() {
    const {movieId} = this.props.match.params;
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
    fetch(movieUrl)
    .then(response => response.json())
    .then(data => this.setState({movie: data, isLoading: false}))
    .catch(error => console.log("Error", error))
  }

  render() {
    const {isLoading} = this.state;
    const {backdrop_path, title, release_date, genres, vote_average, runtime, overview} = this.state.movie;
    const releaseYear = release_date ? release_date.substring(0, 4) : null;
    const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
    const backgroundStyle = {backgroundImage: `url(${imgUrl})`}
    return (
      <div className="movie-page">
      {
        isLoading
          ? <LoadingMovie />
          : <div>
              <div className="movie-image" style={backgroundStyle} />
              <div className="movie-details">
                <h1>
                  {title}
                  <span>({releaseYear})</span>
                </h1>
                <section className="genres">
                  {genres.map((genre, index) => (
                    <div key={genre.id}>
                      <span>{genre.name}</span>
                      {index < genres.length - 1 && (
                        <span className="separator">|</span>
                      )}
                    </div>
                  ))}
                </section>
                <h5>
                  Rating:
                  <span>{vote_average}</span>
                </h5>
                <h5>
                  Runtime:
                  <span>{`${runtime} min`}</span>
                </h5>
                <h4>Overview</h4>
                <p>{overview}</p>
                <Link to="/">
                  <span>go back to movie list</span>
                </Link>
              </div>
            </div>
      }
     </div> );
  }
}

export default Movie;

import React from "react";
import "./movies.css";
import MovieListItem from "./movielistitem.js";
import SearchButton from "../navigation/searchbutton.js"

/**/
const Movies = ({
  movies,
  page,
  onPageIncrease,
  onPageDecrease
}) => (
  <section>
    <ul className="movies">
      {movies.map( movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
    <div className="pagination">
      <SearchButton onClick={onPageDecrease}>≪</SearchButton>
      <span>{`Page ${page}`}</span>
      <SearchButton onClick={onPageIncrease}>≫</SearchButton>
    </div>
  </section>
)


export default Movies;

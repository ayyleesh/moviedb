import React from "react";
import "./movies.css";
import MovieListItem from "./movielistitem.js";
import Button from "../navigation/button.js"

	const Movies = ({movies, page, onPageDecrease, onPageIncrease}) => (
			<section>
			<ul className="movies">
				{movies.map(movie =>(
					<MovieListItem key={movie.id} movie={movie} />
					))}
			</ul>
			<div className="pagination">
				<Button onClick={onPageDecrease}>Prev</Button>
				<span>{`Page ${page}`}</span>
				<Button onClick={onPageIncrease}>Next</Button>
			</div>
			</section>
		)

export default Movies;

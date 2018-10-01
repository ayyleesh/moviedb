import React from "react";
import "./movielistitem.css";


const MovieListItem = ({ movie }) => {
	const {title, poster_path, release_date, vote_average} = movie;
	const imgUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`;
	const year = release_date.substring(0, 4);

	return(
		<li className="movie-item" alt="">
			<img src={imgUrl} />
			<div className="movie-description">
				<h2>{title}</h2>
				<section className="movie-details">
					<div className="movie-year">
						<span className="subdesc">Year</span>
						<span>{year}</span>
					</div>
					<div className="movie-rating">
						<span className="subdesc">Rating</span>
						<span>{vote_average}</span>
					</div>
				</section>
			</div>
			
		</li>
		)
	
}


export default MovieListItem;
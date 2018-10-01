import React from "react";
import "./movielistitem.css";


const MovieListItem = ({ movie }) => {
	const {title, poster_path} = movie;
	const imgUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`;

	return(

		<li className="movie-item" alt="">
			<img src={imgUrl} />
			<span>{title}</span>
		</li>
		)
	
}


export default MovieListItem;
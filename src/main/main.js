import React from "react";
import "./main.css";
import Navigation from "./navigation/navigation";
import Movies from "./movies/movies";

class Main extends React.Component{

	state = {
		page: 1,
		url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
		genre: 'Action',
		genres: [],
		moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
		movies: [],
		total_pages: 1
	}

	onGenreChange = event => {
		this.setState({genre: event.target.value});
	}

	setGenres = genres =>{
		this.setState({genres});
	}

	fetchMovies = (url) =>{
		fetch(url)
		.then(response => response.json())
		.then(data => this.storeMovies(data))
		.catch(error => console.log(error))
	}

	componentDidMount(){
  const savedState = this.getStateFromLocalStorage();
  if ( !savedState || (savedState && !savedState.movies.length)) {
    this.fetchMovies(this.state.moviesUrl);
  } else {
    this.setState({ ...savedState });
    this.generateUrl(savedState);
  }
}

componentWillUpdate(nextProps, nextState) {
this.saveStateToLocalStorage();
if (this.state.moviesUrl !== nextState.moviesUrl) {
	this.fetchMovies(nextState.moviesUrl);
}
if (this.state.page !== nextState.page) {
	this.generateUrl();
}
}

	storeMovies = data =>{
		const movies = data.results.map( result =>{
			const {vote_count, id, genre_ids, poster_path, title, release_date, vote_average} = result;
			return {vote_count, id, genre_ids, poster_path, title, release_date, vote_average};
		});

		this.setState({
			movies,
			total_pages: data.total_pages
		});
	};

	generateUrl = params => {
		const {id, genres, page } = params;
		const selectedGenre = genres.find( genre => genre.name === params.genre);
		const genreId = selectedGenre.id;
		const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` +
		`api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
		`language=en-US&sort_by=popularity.desc&` +
		`with_genres=${genreId}&` +
		`page=${page}`;

		this.setState({moviesUrl});
	}

	onSearchButtonClick = () => {
		this.setState({page: 1});
		this.generateUrl(this.state);
	}

	onPageIncrease = () => {
		const {page, total_pages} = this.state
		const nextPage = page + 1;
		if (nextPage <= total_pages){
			this.setState({page: nextPage});
		}
	}

	onPageDecrease = () => {
		const nextPage = this.state.page - 1;
		if (nextPage > 0) {
			this.setState({page: nextPage});
		}
	}
	
		saveStateToLocalStorage = () => {
			localStorage.setItem("moviedb.params", JSON.stringify(this.state));
		}

		getStateFromLocalStorage = () => {
			return JSON.parse(localStorage.getItem("moviedb.params"));
		}

	render() {
    return (
      <section className="main">
        <Navigation
          onChange={this.onChange}
          onGenreChange={this.onGenreChange}
          setGenres={this.setGenres}
          onSearchButtonClick={this.onSearchButtonClick}
          {...this.state} />
				<Movies
					movies={this.state.movies}
					page={this.state.page}
					onPageIncrease={this.onPageIncrease}
					onPageDecrease={this.onPageDecrease} />
      </section>
    )
  }
}

export default Main;

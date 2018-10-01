import React from "react";
import "./navigation.css";
import Selection from "./selection.js"
import SearchButton from "./searchbutton.js"

class Navigation extends React.Component {
		componentDidMount(){
		fetch (this.props.url)
		.then (response => response.json())
		.then (data => this.props.setGenres(data.genres))
		.catch(error => console.log(error));

	}
  render() {
  	const{genre, genres, onGenreChange, onSearchButtonClick} = this.props;
    return (
      <section className="navigation">
        <Selection
        	genre = {genre}
        	genres = {genres}
        	onGenreChange = {onGenreChange}/>
				<SearchButton onClick={onSearchButtonClick}>search</SearchButton> 
      </section>
    )
  }
}

export default Navigation;

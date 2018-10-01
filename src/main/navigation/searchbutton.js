import React from "react";
import "./searchbutton.css"

/**/
const SearchButton = ({onClick, children}) =>(
  <div className="search-button">
    <button onClick={onClick}>{children}</button>
  </div>
)

export default SearchButton;

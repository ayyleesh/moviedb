import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
  <div>
  <h1>404 NOT FOUND</h1>
  <h3>We couldn't find the movie you're looking for.</h3>
  <Link to="/">Go back.</Link>
  </div>
}

export default NotFound;

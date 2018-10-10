import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./header/header";
import Main from "./main/main";
import Movie from "./movie/movie";
import NotFound from "./notfound";

const App = () => {
  console.log('API key:', process.env.REACT_APP_TMDB_API_KEY);
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/movies/:movieId" component={Movie}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
    );
};

export default App;

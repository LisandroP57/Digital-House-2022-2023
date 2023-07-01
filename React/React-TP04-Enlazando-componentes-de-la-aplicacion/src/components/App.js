import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>
            <Route path='/' exact>
              <ContentWrapper />
            </Route>
            <Route path='/LastMovieInDb' component={LastMovieInDb} />
            <Route path='/GenresInDb' component={GenresInDb} />
            <Route path='/ContentRowMovies' component={ContentRowMovies} />
            <Route component={Error404} />
          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
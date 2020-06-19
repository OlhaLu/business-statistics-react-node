import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={routes.HOME_PAGE} component={HomePage} />
        <Route path={routes.MOVIE_DETAILS_PAGE} component={MovieDetailsPage} />
        <Route path={routes.MOVIES_PAGE} component={MoviesPage} />
        <Route path={routes.ACTOR_DETAILS_PAGE} component={ActorDetailPage} />
        <Route path={routes.ACTORS_PAGE} component={ActorsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

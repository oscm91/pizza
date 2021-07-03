import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { getStore } from '@stepform/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { load } from 'redux-localstorage-simple';

import Home from './app/home';
import Dashboard from './app/dashboard';

const store: Store<any, any> = getStore(load());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

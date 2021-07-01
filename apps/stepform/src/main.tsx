import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { getStore, actions } from '@stepform/store';

import Home from './app/home';

const store: Store<any, any> = getStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

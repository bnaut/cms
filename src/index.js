import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import rootReducer from './reducers';
import './index.scss';

import Header from './containers/Header';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

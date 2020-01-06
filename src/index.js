import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" render={() => <Home />} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

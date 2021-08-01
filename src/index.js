import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers'
import middleware from './middleware/'

import { compose } from 'redux';

// development mode.  this setup uses chrome redux devtool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    middleware
  ));

// non-devtool chrome extension
//  const store = createStore(reducer,middleware)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

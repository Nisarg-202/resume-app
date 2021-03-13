import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducer';

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

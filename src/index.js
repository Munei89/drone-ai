import React from 'react';
import './index.css';
import App from './App';
import {userReducer} from './redux/reducers';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {watchLoadUserData} from './redux/saga';
import ReactDOM from 'react-dom';


if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe")
  axe(React, ReactDOM, 1000)
}

// initializing saga middleware for the store
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    user: userReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadUserData);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
)

import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './redux/store'
import ReactDOM from 'react-dom';


const store = configureStore()

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe")
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
)

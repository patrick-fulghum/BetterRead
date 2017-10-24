import React from 'react';
import ReactDOM from 'react-dom';
// import {login, logout, signup} from './api_util/session_api_util';
import configureStore from './store/store';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  ReactDOM.render(<Root store={ store } />, document.getElementById("root"));
});

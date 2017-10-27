import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import {fetchQuotes} from './actions/quote_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.store = store;
  window.fetchQuotes = fetchQuotes;
  ReactDOM.render(<Root store={ store } />, document.getElementById("root"));
});

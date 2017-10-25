import React from 'react';
import GreetingsContainer from './greetings/greetings_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './sessions/session_form_container';
import AuthRoute from '../api_util/route_util';

const App = () => (
  <div id="ultimate-container">
    <img className="logo" src={window.logo} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;

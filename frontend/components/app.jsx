import React from 'react';
import GreetingsContainer from './greetings/greetings_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './sessions/session_form_container';
import AuthRoute from '../api_util/route_util';

const App = () => (
  <div>
    <h3>
      BetterRead
      <GreetingsContainer />
    </h3>
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;

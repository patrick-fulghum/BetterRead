import React from 'react';
import GreetingsContainer from './greetings/greetings_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './sessions/session_form_container';

const App = () => (
  <div>
    <Route path="signup" component={SessionFormContainer} />
    <Route path="/login" component={SessionFormContainer} />
    <h3>
      BetterRead
      <GreetingsContainer />
    </h3>
  </div>
);

export default App;

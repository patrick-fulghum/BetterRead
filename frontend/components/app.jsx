import React from 'react';
import GreetingsContainer from './greetings/greetings_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './sessions/session_form_container';
import LandingPageContainer from './landing/landing_page_container';
import AuthRoute from '../api_util/route_util';
import Construct from './construction/construction';
import MainContent from './landing/main_content';
import FooterPageContainer from './footer/footer_container';

const App = () => (
  <div id="ultimate-container">
    <Route exact path="/" component={LandingPageContainer} />
    <Route exact path="/" component={MainContent} />
    <Route path="/construction" component={Construct} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <Route path='/' component={FooterPageContainer} />
  </div>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';
import NewStoryContainer from '../../containers/NewStroyContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PrivateRoute(HomeContainer)} />
        <Route path="/login" component={LoginContainer} />}
        <Route path="/new-story" component={PrivateRoute(NewStoryContainer)} />
      </Switch>
    </Router>
  )
};

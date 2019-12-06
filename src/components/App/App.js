import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MainContainer from '../../containers/MainContainer';
import LoginContainer from '../../containers/LoginContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={MainContainer} />
        <Route path="/login" component={LoginContainer} />}
      </Switch>
    </Router>
  )
};

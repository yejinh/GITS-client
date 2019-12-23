import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';
import NewStoryContainer from '../../containers/NewStroyContainer';
import NewStoryOptions from '../NewStoryOptions/NewStoryOptions';
import NewStorySubmitContainer from '../../containers/NewStorySubmitContainer';
import MyStoryContainer from '../../containers/MyStoryContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PrivateRoute(HomeContainer)} />
        <Route path="/login" component={LoginContainer} />}
        <Route exact path="/new-story/options" component={PrivateRoute(NewStoryOptions)} />
        <Route exact path="/new-story" component={PrivateRoute(NewStoryContainer)} />
        <Route exact path="/new-story/submit" component={PrivateRoute(NewStorySubmitContainer)} />
        <Route exact path="/my-stories" component={PrivateRoute(MyStoryContainer)} />
      </Switch>
    </Router>
  )
};

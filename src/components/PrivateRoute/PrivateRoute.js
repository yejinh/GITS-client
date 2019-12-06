import React from 'react';
import { Route, Redirect }from 'react-router-dom';

export default function PrivateRoute({ component: Component }) {
  const token = localStorage.getItem('ACCESS_TOKEN');

  return (
    <Route
      render={() => token
        ? <Component />
        : <Redirect to="/login" />}
    />
  );
}

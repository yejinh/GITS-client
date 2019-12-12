import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route, Redirect }from 'react-router-dom';
import { isLoading, fetchUserData } from '../../actions';

export default function PrivateRoute(Component) {
  function AuthRoute({ fatchUserData }) {
    const token = localStorage.getItem('ACCESS_TOKEN');

    useEffect(() => {
      fatchUserData(token);
    }, [ fatchUserData, token ]);

    return (
      <Route
        render={props => token
          ? <Component {...props} />
          : <Redirect to="/login" />} />
    );
  }

  const dispatchFetchUserData = dispatch => async() => {
    try {
      dispatch(isLoading(true));

      const token = localStorage.getItem('ACCESS_TOKEN');
      const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/users`, {
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }});

      dispatch(fetchUserData(res.data.user));
      dispatch(isLoading(false));
    } catch(err) {
      console.log(err);
    }
  }

  const mapDispatchToProps = dispatch => ({
    fatchUserData: dispatchFetchUserData(dispatch)
  });

  return connect(
    null,
    mapDispatchToProps
  )(AuthRoute);
}

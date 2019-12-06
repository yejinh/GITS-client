import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BACKGROUNDVIDEO from './src/video.mp4';
import './Login.scss';

export default function Login({ isLoggedIn, authenticate }) {
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (isLoggedIn) {
      history.replace(from);
    }
  }, [ isLoggedIn ]);

  const _login = method => async() => {
    try {
      await authenticate(method);
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <video className="login-video" loop autoPlay>
        <source src={BACKGROUNDVIDEO} type="video/mp4"/>
      </video>
      <div className="login-box">
        <button onClick={_login('google')}>
          google
        </button>
        <button onClick={_login('facebook')}>
          facebook
        </button>
      </div>
    </div>
  );
};

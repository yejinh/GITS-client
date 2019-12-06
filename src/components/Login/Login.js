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
  }, [ from, history, isLoggedIn ]);

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
      <div className="login-background" />
      <div className="login-box">
        <div className="login-logo">Genie in the sky</div>
        <div className="login-title">Create your own magical story and bring it to life with your voice.</div>
        <div className="login-buttons">
          <button className="login-with-facebook" onClick={_login('facebook')}>
            Connect with Facebook
          </button>
          <button className="login-with-google" onClick={_login('google')}>
            Connect with Google
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import  { LoginWrapper, LoginBox, LoginButton } from './Login.styled';
import BACKGROUNDVIDEO from './src/video.mp4';
// import './Login.scss';

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
    <LoginWrapper>
      <video loop autoPlay>
        <source src={BACKGROUNDVIDEO} type="video/mp4"/>
      </video>
      <div className="login-background" />
      <LoginBox>
        <div>Genie in the sky</div>
        <div>Create your own magical story and bring it to life with your voice.</div>
        <div className="login-buttons">
          <LoginButton method="facebook" onClick={_login('facebook')}>
            Connect with Facebook
          </LoginButton>
          <LoginButton method="google" onClick={_login('google')}>
            Connect with Google
          </LoginButton>
        </div>
      </LoginBox>
    </LoginWrapper>
  );

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

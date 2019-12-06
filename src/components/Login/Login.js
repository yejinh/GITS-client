import React from 'react';

export default function Login({ authenticate }) {
  const _login = method => () => {
    authenticate(method);
  }
  return (
    <>
      <button onClick={_login('google')}>
        google
      </button>
      <button onClick={_login('facebook')}>
        facebook
      </button>
    </>
  );
};

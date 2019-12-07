import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Main.scss';

export default function Main(props) {
  const [ isNavOpened, setIsNaveOpened ] = useState(false);

  const {
    isLoading,
    user: {
      name,
      email,
      profilePhoto
    },
    fatchUserData
  } = props;

  useEffect(() => {
    fatchUserData();
  }, [ fatchUserData ]);

  const _handleNav = () => {
    setIsNaveOpened(!isNavOpened);
  };

  if (isLoading) return <div>...is loading</div>

  return (
    <>
      <Header onButtonClick={_handleNav} />
      {isNavOpened && <Nav onButtonClick={_handleNav} />}
      <div className="main-wrapper">
        <div>{email}</div>
        <div>{name}</div>
        <img src={profilePhoto} alt="profile" />
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import { MainWrapper } from './Main.styled';

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
      <Nav isOpen={isNavOpened} onButtonClick={_handleNav} />
      <MainWrapper>
        <div>{email}</div>
        <div>{name}</div>
        <img src={profilePhoto} alt="profile" />
      </MainWrapper>
    </>
  );
}

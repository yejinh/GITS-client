import React, { useState } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';
import { StyledHome } from './Home.styled';

export default function Home({ location, user, logout }) {
  // const { state } = location;
  // const [ isNavOpened, setIsNaveOpened ] = useState((state && state.isOpen) || false);
  const [ isNavOpened, setIsNaveOpened ] = useState(false);

  const _handleNav = () => setIsNaveOpened(!isNavOpened);

  return (
    <>
      <Header />
      <Burger
        isOpen={isNavOpened}
        onButtonClick={_handleNav} />
      <Nav
        isOpen={isNavOpened}
        user={user}
        logout={logout} />
      <StyledHome>
        <div>Main</div>
      </StyledHome>
    </>
  );
}

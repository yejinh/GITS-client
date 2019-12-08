import React, { useState } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';
import { StyledHome } from './Home.styled';

export default function Home(props) {
  const [ isNavOpened, setIsNaveOpened ] = useState(false);

  const { user } = props;

  const _handleNav = () => {
    setIsNaveOpened(!isNavOpened);
  };

  return (
    <>
      <Header />
      <Burger isOpen={isNavOpened} onButtonClick={_handleNav} />
      <Nav isOpen={isNavOpened} user={user} />
      <StyledHome>
        <div>Main</div>
      </StyledHome>
    </>
  );
}

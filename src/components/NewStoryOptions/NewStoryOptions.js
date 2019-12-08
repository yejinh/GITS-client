import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';
import { StyledNewStoryOptions } from './NewStoryOptions.styled';

export default function NewStoryOptions({ location }) {
  const [ isNavOpened, setIsNaveOpened ] = useState(false);
  const { user } = location.state;

  const _handleNav = () => {
    setIsNaveOpened(!isNavOpened);
  };

  return (
    <>
      <Header />
      <Burger isOpen={isNavOpened} onButtonClick={_handleNav} />
      <Nav isOpen={isNavOpened} user={user}/>
      <StyledNewStoryOptions>
        <section>
          <Link to={"/new-story"}>Draw your own</Link>
        </section>
        <section>
          <Link to={"/new-story"}>Upload images</Link>
        </section>
      </StyledNewStoryOptions>
    </>
  );
}

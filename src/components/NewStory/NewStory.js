import React, { useState } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';

export default function NewStory({ user }) {
  const [ isNavOpened, setIsNaveOpened ] = useState(false);

  const _handleNav = () => {
    setIsNaveOpened(!isNavOpened);
  };

  return (
    <>
      <Header />
      <Burger isOpen={isNavOpened} setOpen={_handleNav} />
      <Nav isOpen={isNavOpened} user={user}/>
      <div>NEW STORY</div>
    </>
  );
}

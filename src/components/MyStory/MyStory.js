import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';

export default function MyStory({ location, user, userStories, fetchMyStories }) {
  const [ isNavOpened, setIsNaveOpened ] = useState(false);

  const _handleNav = () => setIsNaveOpened(!isNavOpened);

  useEffect(() => {
    fetchMyStories();
  }, [ fetchMyStories ]);

  return (
    <>
    <Header />
    <Burger
      isOpen={isNavOpened}
      onButtonClick={_handleNav} />
    <Nav
      user={user}
      isOpen={isNavOpened} />
      <div>MY STORY</div>
      {userStories.length && <img src={userStories[0].cover} alt="test" /> }
    </>
  );
}

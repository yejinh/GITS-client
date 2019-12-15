import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';
import { StyledNewStoryOptions } from './NewStoryOptions.styled';
import Icon from '../Icon.Styled';
import UPLOAD_ICON from './src/upload.png';
import DRAW_ICON from './src/draw.png';

export default function NewStoryOptions({ location }) {
  const { user, isOpen } = location.state;

  // const [ isNavOpened, setIsNaveOpened ] = useState(isOpen);
  const [ isNavOpened, setIsNaveOpened ] = useState(false);

  const _handleNav = () => {
    setIsNaveOpened(!isNavOpened);
  };

  return (
    <>
      <Header />
      <Burger
        isOpen={isNavOpened}
        onButtonClick={_handleNav} />
      <Nav
        isOpen={isNavOpened}
        user={user} />
      <StyledNewStoryOptions>
        <section>
          <Link to={{
            pathname: "/new-story",
            state: {
              method: "draw"
            }}}>
            <Icon icon={DRAW_ICON} size={"150"} />
            <div>Draw your own</div>
          </Link>
        </section>
        <section>
          <Link to={{
            pathname: "/new-story",
            state: {
              method: "upload"
            }}}>
            <Icon icon={UPLOAD_ICON} size={"150"} />
            <div>Upload images</div>
          </Link>
        </section>
      </StyledNewStoryOptions>
    </>
  );
}

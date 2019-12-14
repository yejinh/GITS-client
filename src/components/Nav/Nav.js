import React  from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon.Styled';
import LIKE from './src/like.png';
import { StyledNav } from './Nav.styled';

export default function Nav({ isOpen, user, logout }) {
  return (
    <StyledNav isOpen={isOpen}>
      <section>
        <div className="like">
          <Icon
            icon={LIKE}
            size={"32"} />
        </div>
        <span style={{ backgroundImage: `url(${user.profilePhoto})` }}/>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </section>
      <section>
        <Link to="/">
          <span className="bar-left first" />
            Home
          <span className="bar-right first" />
        </Link>
        <Link to={{
          pathname: "/new-story/options",
          state: {
            user: user
          }
        }}>
          <span className="bar-left second" />
            My Stories
          <span className="bar-right second" />
        </Link>
        <Link to={{
          pathname: "/new-story/options",
          state: {
            user: user
          }
        }}>
          <span className="bar-left third" />
            New Story
          <span className="bar-right third" />
        </Link>
      </section>
      <section>
        <Link
          to="/"
          className="logout"
          onClick={logout}
        >로그아웃</Link>
      </section>
    </StyledNav>
  );
}

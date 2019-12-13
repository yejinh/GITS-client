import React  from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './Nav.styled';

export default function Nav({ isOpen, user, logout }) {
  return (
    <StyledNav isOpen={isOpen}>
      <section>
        <span style={{ backgroundImage: `url(${user.profilePhoto})` }}/>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </section>
      <section>
        <Link to="/">Home</Link>
        <Link to={{
          pathname: "/new-story/options",
          state: {
            user: user
          }
        }}>New Story</Link>
      </section>
      <Link to="/" className="logout" onClick={logout}>로그아웃</Link>
    </StyledNav>
  );
}

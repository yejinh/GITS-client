import React from 'react';
import { StyledNav } from './Nav.styled';

export default function Nav({ isOpen, user }) {
  return (
    <StyledNav isOpen={isOpen}>
      <section>
        <div style={{ backgroundImage: `url(${user.profilePhoto})` }}/>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </section>
    </StyledNav>
  );
}

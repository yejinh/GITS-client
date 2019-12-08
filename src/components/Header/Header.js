import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <section>
        <Link to="/">Genie in the sky</Link>
      </section>
      <section>
        <span />
      </section>
    </StyledHeader>
  );
}

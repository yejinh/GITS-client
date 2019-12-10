import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import Icon from '../Icon.Styled';
import SEARCH from './src/search.png';

export default function Header() {
  return (
    <StyledHeader>
      <section>
        <Link to="/">Genie in the sky</Link>
      </section>
      <section>
        <Icon icon={SEARCH} size={"25"} />
      </section>
    </StyledHeader>
  );
}

import React from 'react';
import { NavWrapper } from './Nav.styled';

export default function Nav({ isOpen, onButtonClick }) {
  return (
    <NavWrapper isOpen={isOpen}>
      <button className="nav-close" onClick={onButtonClick}>X</button>
    </NavWrapper>
  );
}

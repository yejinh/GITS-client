import React from 'react';
import { StyledBurger } from './Burger.styled';

export default function Burger({ isOpen, onButtonClick }) {
  return (
    <StyledBurger isOpen={isOpen} onClick={onButtonClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

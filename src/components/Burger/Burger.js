import React from 'react';
import { StyledBurger } from './Burger.styled';

export default function Burger({ isOpen, setOpen }) {
  return (
    <StyledBurger open={isOpen} onClick={setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

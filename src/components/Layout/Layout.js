import React from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Burger />
      <Nav />
    </>
  );
}

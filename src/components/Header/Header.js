import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <span className="header-burger"/>
        <span className="header-logo">Genie in the sky</span>
      </div>
      <div className="header-right">
        <span className="header-search" />
      </div>
    </div>
  );
}

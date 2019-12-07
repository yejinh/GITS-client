import React from 'react';
import './Header.scss';

export default function Header({ onButtonClick }) {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <span className="header-burger" onClick={onButtonClick} />
        <span className="header-logo">Genie in the sky</span>
      </div>
      <div className="header-right">
        <span className="header-search" />
      </div>
    </div>
  );
}

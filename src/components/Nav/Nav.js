import React from 'react';
import './Nav.scss';

export default function Nav({ onButtonClick }) {
  return (
    <div className="nav-wrapper">
      <span>NAV</span>
      <span className="nav-close" onClick={onButtonClick}>X</span>
    </div>
  );
}

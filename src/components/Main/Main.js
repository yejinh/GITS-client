import React, { useEffect } from 'react';

export default function Main({ fatchUserData }) {
  useEffect(() => {
    fatchUserData();
  }, []);

  return (
    <div>HELLO</div>
  );
}

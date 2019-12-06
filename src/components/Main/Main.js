import React, { useEffect } from 'react';
import './Main.scss';

export default function Main(props) {
  const {
    isLoading,
    user: {
      name,
      email,
      profilePhoto
    },
    fatchUserData
  } = props;

  useEffect(() => {
    fatchUserData();
  }, [ fatchUserData ]);

  if (isLoading) return <div>...is loading</div>

  return (
    <div className="main-wrapper">
      <div>{email}</div>
      <div>{name}</div>
      <img src={profilePhoto} alt="profile" />
    </div>
  );
}

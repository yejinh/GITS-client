import React from 'react';
import { StyledNewStoryThumbnail } from './NewStoryThumbnail.styeld';

export default function NewStoryThumbnail({ contents, onClick }) {
  return (
    <StyledNewStoryThumbnail onClick={onClick}>
      <span
        style={{ backgroundImage: `url(${URL.createObjectURL(contents[0])}`}} />
      <span
        style={{ backgroundImage: `url(${URL.createObjectURL(contents[1])}`}} />
    </StyledNewStoryThumbnail>
  );
};

import React from 'react';
import { StyledNewStoryThumbnail } from './NewStoryThumbnail.styeld';

export default function NewStoryThumbnail({ contents, pageNumber }) {
  return (
    <StyledNewStoryThumbnail>
      <span
        style={{ backgroundImage: `url(${URL.createObjectURL(contents[0])}`}} />
      <span
        style={{ backgroundImage: `url(${URL.createObjectURL(contents[1])}`}} />
      <div>{pageNumber}</div>
    </StyledNewStoryThumbnail>
  );
};

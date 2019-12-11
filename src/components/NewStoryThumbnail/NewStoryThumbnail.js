import React from 'react';
import { StyledNewStoryThumbnail } from './NewStoryThumbnail.styeld';

export default function NewStoryThumbnail({ data }) {
  console.log(data);
  return (
    <StyledNewStoryThumbnail>
      <span
        style={{ backgroundImage: `url(${URL.createObjectURL(data.pageA[1])}`}}
      />
      <span
        style={{ backgroundImage: `url(${URL.createObjectURL(data.pageB[1])}`}}
      />
    </StyledNewStoryThumbnail>
  );
};

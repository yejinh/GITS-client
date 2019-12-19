import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import NewStoryThumbnail from '../NewStoryThumbnail/NewStoryThumbnail';
import { StyledNewStorySubmit } from './NewStorySubmit.styled';

export default function NewStorySubmit({ history, newStoryPages }) {
  const [ title, setTitle ] = useState('');

  const _handleExit = () => {
    history.goBack();
  };

  return (
    <StyledNewStorySubmit>
      <section className="header-wrapper">
        <div>
          <Burger isOpen={true} onButtonClick={_handleExit} />
        </div>
      </section>
      <section className="submit-story-wrapper">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <div className="thumbnails">
          {newStoryPages.map(page => (
            <NewStoryThumbnail
              key={page.texts}
              contents={page.contents} />
        ))}
        </div>
      </section>
    </StyledNewStorySubmit>
  );
}

import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import NewStoryThumbnails from '../NewStoryThumbnails/NewStoryThumbnails';
import InputText from '../InputText/InputText';
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
        <div>
          <InputText
            type="text"
            maxLength="30"
            text={title}
            setText={setTitle}
          />
        </div>
        <NewStoryThumbnails newStoryPages={newStoryPages} />
      </section>
    </StyledNewStorySubmit>
  );
};

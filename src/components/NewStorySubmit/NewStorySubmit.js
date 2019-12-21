import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import DisplayImage from '../DisplayImage/DisplayImage';
import NewStoryThumbnails from '../NewStoryThumbnails/NewStoryThumbnails';
import InputFile from '../InputFile/InputFile';
import InputText from '../InputText/InputText';
import { StyledInput } from '../Input.styled';
import { StyledNewStorySubmit } from './NewStorySubmit.styled';

export default function NewStorySubmit({ history, user, newStoryPages, onNewStorySubmit }) {
  const [ title, setTitle ] = useState('');
  const [ cover, setCover ] = useState(null);

  const _onSubmitClick = () => {
    if (!title || !cover) {
      return alert('You must submit title and cover');
    }

    onNewStorySubmit(user.id, title, cover, newStoryPages);
  };

  const _setFile = content => setCover(content[0]);

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
          <InputFile setFiles={_setFile} />
        </div>
        <StyledInput>
          <input
            type="submit"
            id="submit"
            onClick={_onSubmitClick} />
          <label htmlFor="submit">Submit Story</label>
        </StyledInput>
        <div>
          <InputText
            type="text"
            maxLength="30"
            text={title}
            setText={setTitle}
          />
        </div>
        <div className="cover-thumbnails-wrapper">
          <div className="coever-wrapper">
            {cover && <DisplayImage content={cover} />}
          </div>
          <div className="thumbnails-wrapper">
            <NewStoryThumbnails
              width="30"
              newStoryPages={newStoryPages} />
          </div>
        </div>
      </section>
    </StyledNewStorySubmit>
  );
}

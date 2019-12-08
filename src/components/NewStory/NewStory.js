import React from 'react';
import Burger from '../Burger/Burger';
import InputText from '../InputText/InputText';
import { StyledNewStory } from './NewStory.styled';

export default function NewStory(props) {
  const _handleExit = () => {
    props.history.goBack();
  };

  return (
    <StyledNewStory>
      <section>
        <span>
          <Burger isOpen={true} onButtonClick={_handleExit} />
        </span>
      </section>
      <section>
        <div>NEW STORY</div>
        <InputText />
      </section>
    </StyledNewStory>
  );
};

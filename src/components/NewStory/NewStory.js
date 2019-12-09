import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import NewStoryPage from '../NewStoryPage/NewStoryPage';
import { StyledNewStory } from './NewStory.styled';

export default function NewStory({ location, history }) {
  const [ pageA, setPageA ] = useState('');
  const [ pageB, setPageB ] = useState('');

  const { method } = location.state;

  const _handleExit = () => {
    history.goBack();
  };

  const _setPageA = text => setPageA(text);
  const _setPageB = text => setPageB(text);

  const _submit = text => {
    console.log(text);
  };

  return (
    <StyledNewStory>
      <section>
        <span>
          <Burger isOpen={true} onButtonClick={_handleExit} />
        </span>
      </section>
      <section>
        <div><NewStoryPage method={method} text={pageA} setText={_setPageA} /></div>
        <div><NewStoryPage method={method} text={pageB} setText={_setPageB} /></div>
      </section>
    </StyledNewStory>
  );
};

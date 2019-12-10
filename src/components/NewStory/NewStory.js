import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import InputFile from '../InputFile/InputFile';
import NewStoryPage from '../NewStoryPage/NewStoryPage';
import { StyledNewStory } from './NewStory.styled';

export default function NewStory({ location, history }) {
  const [ textA, setTextA ] = useState('');
  const [ textB, setTextB ] = useState('');
  const [ contents, setContents ] = useState([]);

  const { method } = location.state;

  const _handleExit = () => {
    history.goBack();
  };

  const _setTextA = text => setTextA(text);
  const _setTextB = text => setTextB(text);
  const _setContents = content => setContents(content);

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
        <InputFile setFiles={_setContents} />
      </section>
      <section>
        <div>
          <NewStoryPage
            method={method}
            text={textA}
            content={contents[0]}
            setText={_setTextA}
            test="a"
          />
        </div>
        <div>
          <NewStoryPage
            method={method}
            text={textB}
            content={contents[1]}
            setText={_setTextB}
            test="b"
          />
        </div>
      </section>
    </StyledNewStory>
  );
};

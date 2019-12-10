import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import InputFile from '../InputFile/InputFile';
import NewStoryPage from '../NewStoryPage/NewStoryPage';
import { StyledNewStory } from './NewStory.styled';

export default function NewStory({ location, history }) {
  const [ textA, setTextA ] = useState('');
  const [ textB, setTextB ] = useState('');
  const [ contents, setContents ] = useState([]);
  const [ isSubmittedA, setIsSubmittedA ] = useState(false);
  const [ isSubmittedB, setIsSubmittedB ] = useState(false);

  const { method } = location.state;

  const _handleExit = () => {
    history.goBack();
  };

  const _setTextA = text => setTextA(text);
  const _setTextB = text => setTextB(text);
  const _setContents = content => setContents(content);
  const _setIsSubmittedA = data => setIsSubmittedA(data);
  const _setIsSubmittedB = data => setIsSubmittedB(data);
  const _onNextPageClick = () => {
    if (contents.length < 2) {
      return alert('You must upload contents on both pages.');
    }
    if (isSubmittedA && isSubmittedB) {
      return console.log('working');
    }
    alert('You must submit a story.');
  };

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
        <button onClick={_onNextPageClick}> HELLO </button>
        <div className="pages">
          <div>
            <NewStoryPage
              method={method}
              text={textA}
              isSubmitted={isSubmittedA}
              content={contents[0]}
              submit={_setTextA}
              setIsSubmitted={_setIsSubmittedA}
            />
          </div>
          <div>
            <NewStoryPage
              method={method}
              text={textB}
              isSubmitted={isSubmittedB}
              content={contents[1]}
              submit={_setTextB}
              setIsSubmitted={_setIsSubmittedB}
            />
          </div>
        </div>
        <button onClick={_onNextPageClick}> HELLO </button>
      </section>
    </StyledNewStory>
  );
};

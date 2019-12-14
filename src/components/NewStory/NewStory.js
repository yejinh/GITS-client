import React, { useState } from 'react';
import Burger from '../Burger/Burger';
import NewStoryThumbnail from '../NewStoryThumbnail/NewStoryThumbnail';
import InputFile from '../InputFile/InputFile';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import NewStoryPage from '../NewStoryPage/NewStoryPage';
import { StyledNewStory } from './NewStory.styled';
import Icon from '../Icon.Styled';
import LEFT_BUTTON from './src/left-button.png';
import RIGHT_BUTTON from './src/right-button.png';

export default function NewStory(props) {
  const { location, history, newStoryPages, addPages, submitNewStory } = props;

  const [ textA, setTextA ] = useState('');
  const [ textB, setTextB ] = useState('');
  const [ contents, setContents ] = useState([]);
  const [ audioUrl, setAudioUrl ] = useState(null);
  const [ isSubmittedA, setIsSubmittedA ] = useState(false);
  const [ isSubmittedB, setIsSubmittedB ] = useState(false);
  const [ nextClicked, setNextClicked ] = useState(false);

  const { method } = location.state;

  const _handleExit = () => {
    history.goBack();
  };

  const _setTextA = text => setTextA(text);
  const _setTextB = text => setTextB(text);
  const _setContents = content => setContents(content);
  const _setAudioUrl = audioFile => setAudioUrl(audioFile);
  const _setIsSubmittedA = data => setIsSubmittedA(data);
  const _setIsSubmittedB = data => setIsSubmittedB(data);
  const _setNextClicked = () => setNextClicked(false);
  const _addPages = () => {
    if (contents.length < 2) {
      return alert('You must upload contents on both pages.');
    }

    if (!isSubmittedA || !isSubmittedB) {
      return alert('You must submit a story.');
    }

    addPages(textA, textB, contents, audioUrl);
    setNextClicked(true);
    setTextA('');
    setTextB('');
    setContents([]);
    setAudioUrl(null);
    setIsSubmittedA(false);
    setIsSubmittedB(false);
  };

  const _submitNewStory = (title, cover) => {
    submitNewStory(title, cover,newStoryPages);
  };

  return (
    <StyledNewStory>
      <section>
        <div>
          <Burger isOpen={true} onButtonClick={_handleExit} />
        </div>
      </section>
      <section>
        <div>
          <InputFile setFiles={_setContents} />
        </div>
        <AudioPlayer
          audioUrl={audioUrl}
          setAudioUrl={_setAudioUrl} />
        <div>
          <button onClick={_submitNewStory}> submit </button>
        </div>
      </section>
      <section>
        <div className="thumnails">
          {newStoryPages.map((page, i) => (
            <NewStoryThumbnail
              key={page.texts}
              contents={page.contents}
              pageNumber={i + 1} />
          ))}
        </div>
        <div className="left-buttons">
          <Icon
            icon={LEFT_BUTTON}
            size={"100"}
            opacity="true"
            disable={newStoryPages.length ? "false" : "true"} />
        </div>
        <div className="pages">
          <div>
            <NewStoryPage
              method={method}
              content={contents[0]}
              submit={_setTextA}
              isSubmitted={isSubmittedA}
              setIsSubmitted={_setIsSubmittedA}
              isNewPage={nextClicked}
              setIsNewPage={_setNextClicked} />
          </div>
          <div>
            <NewStoryPage
              method={method}
              content={contents[1]}
              submit={_setTextB}
              isSubmitted={isSubmittedB}
              setIsSubmitted={_setIsSubmittedB}
              isNewPage={nextClicked}
              setIsNewPage={_setNextClicked} />
          </div>
        </div>
        <div className="right-buttons">
          <Icon
            icon={RIGHT_BUTTON}
            size={"100"}
            opacity="true"
            onClick={_addPages} />
        </div>
      </section>
    </StyledNewStory>
  );
}

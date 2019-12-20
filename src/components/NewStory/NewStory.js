import React, { useState, useEffect, useRef } from 'react';
import Burger from '../Burger/Burger';
import NewStoryThumbnails from '../NewStoryThumbnails/NewStoryThumbnails';
import InputFile from '../InputFile/InputFile';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import NewStoryPage from '../NewStoryPage/NewStoryPage';
import { StyledNewStory } from './NewStory.styled';
import { StyledInput } from '../Input.styled';
import Icon from '../Icon.Styled';
import LEFT_BUTTON from './src/left-button.png';
import RIGHT_BUTTON from './src/right-button.png';

function NewStory(props) {
  const {
    location,
    history,
    curPage,
    curPageNumber,
    newStoryPages,
    onPagesAdd,
    onPrevClick,
    onNextClick,
    // onNewStorySubmit
  } = props;
  const { method } = location.state;

  const [ textA, setTextA ] = useState('');
  const [ textB, setTextB ] = useState('');
  const [ contents, setContents ] = useState([]);
  const [ audioUrl, setAudioUrl ] = useState(null);
  const [ nextClicked, setNextClicked ] = useState(false);

  const isUpdated = useRef(true);

  useEffect(() => {
    if (isUpdated.current) {
      isUpdated.current = false;
      return;
    }

    if (curPage && !textA) {
      setTextA(curPage.texts[0]);
      setTextB(curPage.texts[1]);
      setContents(curPage.contents);
      setAudioUrl(curPage.audioUrl);
    }
  });

  const _setTextA = text => setTextA(text);
  const _setTextB = text => setTextB(text);
  const _setContents = content => setContents(content);
  const _setAudioUrl = audioFile => setAudioUrl(audioFile);
  const _setNextClicked = () => setNextClicked(false);

  const _handleExit = () => {
    history.goBack();
  };

  const _onPrevClick = () => {
    if (curPageNumber) {
      _resetState();
      setNextClicked(false);

      onPrevClick(curPageNumber - 1, textA, textB, contents, audioUrl);
    }
  };

  const _onNextClick = () => {
    if (contents.length < 2) {
      return alert('You must upload contents on both pages.');
    }

    if (newStoryPages.length - 1 >= curPageNumber) {
      _resetState();

      if (newStoryPages.length - 1 === curPageNumber) {
        setNextClicked(true);
      }

      onNextClick(curPageNumber + 1, textA, textB, contents, audioUrl);
      return;
    }


    onPagesAdd(textA, textB, contents, audioUrl);
    _resetState();
    setNextClicked(true);
  };

  const _onNewStorySubmit = () => {
    history.push("/new-story/submit");
  };

  const _resetState = () => {
    setTextA('');
    setTextB('');
    setContents([]);
    setAudioUrl(null);
  };

  return (
    <StyledNewStory ref={isUpdated}>
      <section className="thumbnails-wrapper">
      <NewStoryThumbnails newStoryPages={newStoryPages} />
      </section>
      <section className="story-wrapper">
        <section className="header-wrapper">
          <div>
            <Burger isOpen={true} onButtonClick={_handleExit} />
          </div>
        </section>
        <section className="buttons-wrapper">
          <div>
            <InputFile setFiles={_setContents} />
          </div>
          <AudioPlayer
            audioUrl={audioUrl}
            setAudioUrl={_setAudioUrl} />
          <div>
            <StyledInput>
              <input
                type="submit"
                id="submit"
                onClick={_onNewStorySubmit} />
              <label htmlFor="submit">Submit Story</label>
            </StyledInput>
          </div>
        </section>
        <section className="pages-wrapper">
          <div className="left-buttons">
            <Icon
              icon={LEFT_BUTTON}
              size={"100"}
              opacity="true"
              disable={curPageNumber}
              onClick={_onPrevClick} />
          </div>
          <div className="pages">
            <div>
              <NewStoryPage
                method={method}
                text={textA}
                content={contents[0]}
                setText={_setTextA}
                isNewPage={nextClicked}
                setIsNewPage={_setNextClicked} />
            </div>
            <div>
              <NewStoryPage
                method={method}
                text={textB}
                content={contents[1]}
                setText={_setTextB}
                isNewPage={nextClicked}
                setIsNewPage={_setNextClicked} />
            </div>
          </div>
          <div className="right-buttons">
            <Icon
              icon={RIGHT_BUTTON}
              size={"100"}
              opacity="true"
              onClick={_onNextClick} />
          </div>
        </section>
      </section>
    </StyledNewStory>
  );
}

export default NewStory;

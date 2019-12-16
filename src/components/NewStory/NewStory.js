import React, { useState, useEffect, useRef } from 'react';
import Burger from '../Burger/Burger';
import NewStoryThumbnail from '../NewStoryThumbnail/NewStoryThumbnail';
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
    onNewStorySubmit
  } = props;
  const { method } = location.state;

  const [ textA, setTextA ] = useState('');
  const [ textB, setTextB ] = useState('');
  const [ contents, setContents ] = useState([]);
  const [ audioUrl, setAudioUrl ] = useState(null);
  const [ isSubmittedA, setIsSubmittedA ] = useState(false);
  const [ isSubmittedB, setIsSubmittedB ] = useState(false);
  const [ nextClicked, setNextClicked ] = useState(false);

  const isUpdated = useRef(true);
  // const testRef = useRef(null);

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
  const _setIsSubmittedA = data => setIsSubmittedA(data);
  const _setIsSubmittedB = data => setIsSubmittedB(data);
  const _setNextClicked = () => setNextClicked(false);

  const _handleExit = () => {
    history.goBack();
  };

  const _onPrevClick = () => {
    if (curPageNumber) {
      _resetState();
      setNextClicked(false);
      onPrevClick(curPageNumber - 1);
    }
  };

  const _onNextClick = () => {
    if (contents.length < 2) {
      return alert('You must upload contents on both pages.');
    }

    if (!isSubmittedA || !isSubmittedB) {
      return alert('You must save a story.');
    }

    if (newStoryPages.length - 1 >= curPageNumber) {
      _resetState();
      onNextClick(curPageNumber + 1);

      if (newStoryPages.length - 1 === curPageNumber) {
        setNextClicked(true)
      };

      return;
    }

    onPagesAdd(textA, textB, contents, audioUrl);
    _resetState();
    setNextClicked(true);
  };

  const _onNewStorySubmit = (title, cover) => {
    if (newStoryPages.length < 2) {
      return alert('You must submit at least 3 pages');
    }

    // onNewStorySubmit(title, cover,newStoryPages);
    onNewStorySubmit(newStoryPages);
  };

  const _resetState = () => {
    setTextA('');
    setTextB('');
    setContents([]);
    setAudioUrl(null);
    setIsSubmittedA(false);
    setIsSubmittedB(false);
  };

  return (
    <StyledNewStory ref={isUpdated}>
      <section className="thumbnails-wrapper">
        <div className="thumbnails">
          <div>THUMBNAILS</div>
          {newStoryPages.map(page => (
            <NewStoryThumbnail
              key={page.texts}
              contents={page.contents} />
        ))}
      </div>
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
                initialText={textA}
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
                initialText={textB}
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
              onClick={_onNextClick} />
          </div>
        </section>
      </section>
    </StyledNewStory>
  );
}

export default React.memo(NewStory);

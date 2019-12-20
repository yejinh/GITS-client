import React from 'react';
import InputText from '../InputText/InputText';
import DisplayImage from '../DisplayImage/DisplayImage';
import { StyledNewStoryPage } from './NewStoryPage.styled';
import Icon from '../Icon.Styled';
import UPLOAD_ICON from '../NewStoryOptions/src/upload.png';

export default function NewStoryPage(props) {
  const {
    // method,
    text,
    content,
    setText,
    isNewPage,
    setIsNewPage
  } = props;

  return (
    <StyledNewStoryPage>
      <div className="content">
        {content
          ? <DisplayImage content={content} />
          : <Icon icon={UPLOAD_ICON} size={"100"} />
        }
      </div>
      <InputText
        text={text}
        setText={setText}
        isNewPage={isNewPage}
        setIsNewPage={setIsNewPage} />
    </StyledNewStoryPage>
  );
}

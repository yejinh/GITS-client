import React from 'react';
import InputText from '../InputText/InputText';
import DisplayImage from '../DisplayImage/DisplayImage';
import Canvas from '../../components/Canvas/Canvas';
import { StyledNewStoryPage } from './NewStoryPage.styled';
import Icon from '../Icon.Styled';
import UPLOAD_ICON from '../NewStoryOptions/src/upload.png';

export default function NewStoryPage(props) {
  const {
    method,
    text,
    content,
    setText,
    isNewPage,
    setIsNewPage
  } = props;

  const _upload = () => (
    content
      ? <DisplayImage content={content} />
      : <Icon icon={UPLOAD_ICON} size={"100"} />
  );

  return (
    <StyledNewStoryPage>
      <div className="content">
        {method === "upload" && _upload()}
        {method === "draw" && <Canvas />}
      </div>
      <InputText
        text={text}
        setText={setText}
        isNewPage={isNewPage}
        setIsNewPage={setIsNewPage} />
    </StyledNewStoryPage>
  );
}

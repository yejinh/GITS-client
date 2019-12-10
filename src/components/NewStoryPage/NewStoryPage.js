import React from 'react';
import InputText from '../InputText/InputText';
import { StyledNewStoryPage } from './NewStoryPage.styled';
import Icon from '../Icon.Styled';
import UPLOAD_ICON from '../NewStoryOptions/src/upload.png';

export default function NewStoryPage(props) {
  const {
    method,
    text,
    content,
    setText,
    test
  } = props;

  return (
    <StyledNewStoryPage>
      <div className="content">
        {content
          ? <span
              className="image"
              style={{ backgroundImage: `url(${URL.createObjectURL(content)}`}}
            />
          : <Icon icon={UPLOAD_ICON} size={"100"} />
        }
      </div>
      <InputText text={text} setText={setText} />
    </StyledNewStoryPage>
  );
}

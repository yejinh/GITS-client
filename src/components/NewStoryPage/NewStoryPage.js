import React from 'react';
import InputText from '../InputText/InputText';
import { StyledNewStoryPage } from './NewStoryPage.styled';
import Icon from '../Icon.Styled';
import UPLOAD_ICON from '../NewStoryOptions/src/upload.png';

export default function NewStoryPage(props) {
  const {
    // testRef,
    // method,
    initialText,
    content,
    submit,
    isSubmitted,
    setIsSubmitted,
    isNewPage,
    setIsNewPage
  } = props;

  return (
    <StyledNewStoryPage>
      <div className="content">
        {content
          ? <span
              className="image"
              style={{ backgroundImage: `url(${URL.createObjectURL(content)}`}} />
          : <Icon icon={UPLOAD_ICON} size={"100"} />
        }
      </div>
      <InputText
        // ref={testRef}
        initialText={initialText}
        visible={content ? "visible" : "hidden"}
        submit={submit}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        isNewPage={isNewPage}
        setIsNewPage={setIsNewPage} />
    </StyledNewStoryPage>
  );
}

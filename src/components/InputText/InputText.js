import React from 'react';
import { StyledForm } from './InputText.styled';

export default function InputText(props) {
  const {
    type,
    text,
    setText,
    maxLength,
    isNewPage,
    setIsNewPage
  } = props;

  if (isNewPage && text) setText('');

  const _onChange = e => {
    setText(e.target.value);
    setIsNewPage && setIsNewPage();
  };

  return (
    <StyledForm>
      {type
        ? <input
            type={type}
            maxLength={maxLength}
            value={text}
            onChange={_onChange} />
        :  <textarea
            onChange={_onChange}
            value={text} />
      }
    </StyledForm>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { StyledForm } from './InputText.styled';

export default function InputText(props) {
  const {
    testRef,
    initialText,
    visible,
    submit,
    isSubmitted,
    setIsSubmitted,
    isNewPage,
    setIsNewPage
  } = props;

  const [ text, setText ] = useState('');

  const isUpdated = useRef(true);

  if (isNewPage && text) setText('');

  useEffect(() => {
    if (isUpdated.current) {
      isUpdated.current = false;
      return;
    }
    if (!isNewPage && initialText && !isSubmitted) {
      setText(initialText);
    }
  });

  const _onChange = e => {
    setText(e);
    setIsSubmitted(false);
    setIsNewPage();
  };

  const _submit = e => {
    e.preventDefault();

    if (!text.length) {
      return alert('You must type a story.');
    }

    submit(text);
    setIsSubmitted(true);
  };

  return (
    <StyledForm
      ref={isUpdated}
      onSubmit={_submit}
      isSubmitted={isSubmitted}
      visible={visible} >
      <textarea
        onChange={e => _onChange(e.target.value)}
        value={initialText || text} />
      <input
        type="submit"
        value=" " />
    </StyledForm>
  );
}

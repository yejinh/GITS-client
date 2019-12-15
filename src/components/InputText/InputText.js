import React, { useState } from 'react';
import { StyledForm } from './InputText.styled';

export default function InputText(props) {
  const {
    test,
    visible,
    submit,
    isSubmitted,
    setIsSubmitted,
    isNewPage,
    setIsNewPage
  } = props;

  console.log(visible);

  const [ text, setText ] = useState(test || '');

  if (isNewPage && text) setText('');

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
      onSubmit={_submit}
      isSubmitted={isSubmitted}
      visible={visible} >
      <textarea
        onChange={e => _onChange(e.target.value)}
        value={text} />
      <input
        type="submit"
        value=" " />
    </StyledForm>
  );
}

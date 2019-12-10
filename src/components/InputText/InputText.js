import React, { useState } from 'react';
import { StyledForm } from './InputText.styled';

export default function InputText({ submit, isSubmitted, setIsSubmitted }) {
  const [ text, setText ] = useState('');

  const _onChange = e => {
    setText(e);
    setIsSubmitted(false);
  };

  const _submit = e => {
    e.preventDefault();

    if (!text.length) return alert('You must submit a story.');

    submit(text);
    setIsSubmitted(true);
  };

  return (
    <StyledForm
      onSubmit={_submit}
      isSubmitted={isSubmitted}
    >
      <textarea
        onChange={e => _onChange(e.target.value)}
        value={text}
      />
      <input
        type="submit"
        value={isSubmitted
          ? "Submitted"
          : "Submit"
      }/>
    </StyledForm>
  );
}

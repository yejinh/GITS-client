import React, { useState } from 'react';
import { StyledInputText } from './InputText.styled';

export default function InputText() {
  const [ text, setText ] = useState('');
  const _submit = e => {
    e.preventDefault();
    if (!text.length) return alert('You must submit a story.');
    setText('');
  };

  return (
    <form onSubmit={_submit}>
      <StyledInputText
        onChange={e => setText(e.target.value)}
        value={text}
      />
    </form>
  );
}

import React, { useState } from 'react';

export default function InputText({ text, setText }) {
  const _submit = e => {
    e.preventDefault();
    if (!text.length) return alert('You must submit a story.');
    console.log(text);
    setText('');
  };

  return (
    <form onSubmit={_submit}>
      <textarea
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

import React, { useState } from 'react';

export default function InputText() {
  const [ text, setText ] = useState('');

  const _submit = e => {
    e.preventDefault();
    if (!text.length) return console.log('nonono');
    console.log(text);
    setText('');
  };

  return (
    <form onSubmit={_submit}>
      <textarea onChange={e => setText(e.target.value)} value={text} />
      <input type="submit" value="submit" />
    </form>
  );
}

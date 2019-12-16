import React from 'react';
import { StyledInput } from '../Input.styled';

export default function InputFile({ setFiles }) {
  const _setFiles = files => {
    if (files.length > 2) {
      return alert("Please select max 2 files.");
    }

    setFiles(files);
  };

  return (
    <StyledInput>
      <input
        type="file"
        id="file"
        accept="image/jpeg, image/gif"
        multiple
        onChange={e => _setFiles(e.target.files)} />
      <label htmlFor="file">Select files</label>
    </StyledInput>
  );
}

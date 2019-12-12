import React from 'react';
import { StyledInputFile } from './InputFile.styled';

export default function InputFile({ setFiles }) {
  const _setFiles = files => {
    if (files.length > 2) {
      return alert("Please select max 2 files.");
    }

    setFiles(files);
  };

  return (
    <StyledInputFile>
      <input
        type="file"
        id="file"
        accept="image/jpeg, image/gif"
        multiple onChange={e => _setFiles(e.target.files)}
      />
      <label htmlFor="file">Select files</label>
    </StyledInputFile>
  );
}

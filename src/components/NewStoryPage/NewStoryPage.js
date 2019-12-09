import React, { useState } from 'react';
import InputText from '../InputText/InputText';
import { StyledNewStoryPage, Input } from './NewStoryPage.styled';

export default function NewStoryPage({ method, text, setText }) {
  const [ file, setFile ] = useState(null);

  const _uploadFile = targetFile => {
    setFile(targetFile);
  };

  console.log(file);

  return (
    <StyledNewStoryPage>
      <div>PAGE</div>
      <input type="file" id="file" onChange={e => _uploadFile(e.target.files[0])} />
      <label htmlFor="file">Select a file</label>
      {/* <button class="upload" type="button">Upload File</button> */}
      {/* <button class="reset" type="reset">Reset</button> */}
      <InputText text={text} setText={setText} />
    </StyledNewStoryPage>
  );
}

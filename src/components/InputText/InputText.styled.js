import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  textarea {
    width: 90%;
    height: 130px;
    padding: 10px;
    resize: none;
    font-size: 25px;
    border-radius: 5px;

    :focus {
      outline: none;
    }
  }
`;

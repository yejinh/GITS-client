import styled from 'styled-components';
import SAVE from './src/save.png';
import * as vars from '../variables';

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

  input {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 10%;
    left: 80%;
    visibility: ${({ visible }) => visible};
    border-radius: 10px;
    background-image: url(${SAVE});
    background-size: cover;
    background-position: center;
    background-color: ${({ isSubmitted }) => (
      isSubmitted
        ? `${vars.$prussianBlue}`
        : `${vars.$babyBlue}`
    )}
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`;

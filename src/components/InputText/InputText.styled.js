import styled from 'styled-components';
import * as vars from '../variables';

export const StyledForm = styled.form`
  textarea {
    width: 90%;
    height: 130px;
    padding: 10px;
    resize: none;
    font-size: 25px;

    :focus {
      outline: none;
    }
  }

  input {
    width: 10%;
    background-color: ${props => (
      props.isSubmitted
      ? `${vars.$prussianBlue}`
      : `${vars.$babyBlue}`
    )}
    cursor: pointer;

    :focus {
      outline: none;
    }
  }
`;

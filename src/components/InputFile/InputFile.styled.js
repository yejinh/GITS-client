import styled from 'styled-components';
import * as vars from '../variables';

export const StyledInputFile = styled.button`
  border: none;
  width: 160px;

  :focus {
    outline: 0;
  }

  > input {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  > input + label {
    border: none;
    position: relative;
    display: inline-block;
    padding: 1rem 50px;
    vertical-align: middle;
    font-family: ${vars.$serif};
    font-size: inherit;
    font-weight: 600;
    outline: none;
    border-radius: 5px;
    background-color: ${vars.$orange};
    color: ${vars.$ivory};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: ${vars.$orange};
      background-color: ${vars.$ivory};
    }
  }

  label {
    background-color: ${vars.$black};
    border-radius: 50px;
    overflow: hidden;

    &:before {
      color: #fff;
      content: "\f382";
      font-family: "Font Awesome 5 Pro";
      font-size: 100%;
      height: 100%;
      right: 130%;
      line-height: 3.3;
      position: absolute;
      top: 0px;
      transition: all 0.3s;
    }

    &:hover {
      background-color: ${vars.$black};

      &:before {
        right: 75%;
      }
    }
  }
`;

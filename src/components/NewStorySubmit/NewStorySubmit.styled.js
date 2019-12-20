import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStorySubmit = styled.div`
  height: 100vh;

  section {
    display: flex;
  }

  .header-wrapper {
    justify-content: flex-end;
    margin-right: 50px;
    height: 70px;

    > div {
      display: inline-block;
      position: relative;
      width: 50px;
      height: 50px;
    }

    > button {
      display: inline-block;k
    }
  }

  .submit-story-wrapper {
    height: calc(100vh - 70px);
    flex-direction: column;
    background-color: ${vars.$ivory};

    input {
      width: 100%;
      height: 70px;
      padding: 25px;
      font-size: 25px;

      :focus {
        outline: none;
      }
    }
  }
`;

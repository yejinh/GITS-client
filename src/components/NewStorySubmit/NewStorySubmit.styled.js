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

    input[type = "text"] {
      width: 100%;
      height: 70px;
      padding: 25px;
      font-size: 25px;

      :focus {
        outline: none;
      }
    }
  }

  .cover-thumbnails-wrapper {
    border: 1px solid ${vars.$black};
    display: flex;
    height: calc(100vh - 70px);
    justify-content: space-around;

    .coever-wrapper {
      border: 1px solid ${vars.$black};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35%;

      span {
        display: inline-block;
        width: 90%;
        height: 90%;
        background-size: cover;
        background-position: center;
      }
    }


    .thumbnails-wrapper {
      width: 60%;
    }
  }
`;

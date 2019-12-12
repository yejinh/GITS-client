import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStory = styled.div`
  section {
    display: flex;

    :first-child {
      justify-content: flex-end;
      margin-right: 50px;
      height: 70px;

      > div {
        display: inline-block;
        position: relative;
        width: 50px;
        height: 50px;
      }
    }

    > button {
      display: inline-block;
      margin: 0 auto;
    }

    .pages {
      display: flex;
      width: 80%;

      > div {
        width: 100%;
      }
    }

    :nth-child(2) {
      height: 100px;
      margin-bottom: 10px;
      padding: 10px;
      background-color: white;

      .thumnails {
        display: flex;
        background-color: transparent;
      }
    }

    :nth-child(3) {
      border: 1px solid ${vars.$black};

      > div:first-child {
        display: flex;
        width: 10%;
        flex-direction: column;
      }
    }
  }

  span {
    // border: 1px solid ${vars.$black};

  }
`;

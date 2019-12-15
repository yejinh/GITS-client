import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStory = styled.div`
  display: flex;

  section {
    display: flex;
  }

  .story-wrapper {
    width: 100%;
    flex-direction: column;
  }

  .thumbnails-wrapper {
    height: 100vh;
    padding: 10px;

    .thumbnails {
      border: 1px solid ${vars.$black};
      display: flex;
      width: 300px;
      padding: 50px 0 0;
      flex-direction: column;
      overflow: scroll;
      align-items: center;

      > div:first-child {
        margin-bottom: 50px;
        color: ${vars.$black};
      }
    }
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
      display: inline-block;
    }
  }

  .buttons-wrapper {
    height: 100px;
    padding: 10px;
    justify-content: space-around;
  }

  .submit-button {
    display: inline-block;
    width: 150px;
    height: 45px;
    border-radius: 5px;
    pointer: cursor;
  }

  .pages-wrapper {
    justify-content: space-around;

    .pages {
      display: flex;
      width: 80%;

      > div {
        position: relative;
        width: 100%;
      }
    }

    .left-buttons, .right-buttons {
      display: flex;
      width: 5%;
      align-items: center;
    }
  }

  span {
    // border: 1px solid ${vars.$black};

  }
`;

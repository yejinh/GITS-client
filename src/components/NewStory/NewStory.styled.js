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
    padding: 0 10%;
    justify-content: space-between;

    > div:first-child {
      width: 165px;

      button {
        width: 100%;
      }
    }

    > div:nth-child(2) {
      height: 45px;
    }
  }

  .pages-wrapper {
    height: calc(100vh - 170px);
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

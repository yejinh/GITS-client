import styled from 'styled-components';
// import * as vars from '../variables';

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
      display: inline-block;
    }
  }

  .submit-story-wrapper {
    height: calc(100vh - 70px);
    background-color: red;
  }
`;

import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStory = styled.div`
  overflow: hidden;

  section {
    display: flex;

    :first-child {
      justify-content: flex-end;
      margin-right: 50px;
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
      justify-content: center;
    }

    :nth-child(3) {
      border: 1px solid ${vars.$black};
    }
  }

  span {
    // border: 1px solid ${vars.$black};
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
  }
`;

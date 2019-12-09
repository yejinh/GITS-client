import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStory = styled.div`
  overflow: hidden;
  section {
    // border: 1px solid ${vars.$black};
    display: flex;

    :first-child {
      justify-content: flex-end;
      margin-right: 50px;
    }

    > div {
      border: 1px solid ${vars.$black};
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  span {
    // border: 1px solid ${vars.$black};
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
  }
}`;

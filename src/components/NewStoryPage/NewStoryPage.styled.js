import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryPage = styled.div`
  border: 1px solid ${vars.$black};
  width: 100%;
  height: 85vh;

  .content {
    border: 1px solid ${vars.$black};
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
  }

  .image {
    display: inline-block;
    width: 90%;
    height: 80%;
    background-size: cover;
    background-position: center;
  }
`;

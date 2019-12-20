import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryThumbnails = styled.div`
  border: 1px solid ${vars.$black};
  display: flex;
  width: 300px;
  padding: 50px 0 0;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  overflow: scroll;

  > div:first-child {
    margin-bottom: 50px;
    color: ${vars.$black};
  }

  .thumbnail {
    display: flex;
    width: 100%;
    margin: 10px 0;
    justify-content: center;
    background-color: transparent;
  }

  span {
    display: inline-block;
    width: 45%;
    height: 100px;
    background-size: cover;
    background-position: center;
  }
`;

import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryThumbnail = styled.div`
  border: 1px solid ${vars.$black};
  width: 100%;

  span {
    display: inline-block;
    width: 10%;
    height: 60%;
    background-size: cover;
    background-position: center;
  }
`;

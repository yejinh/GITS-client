import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryThumbnail = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  justify-content: center;
  background-color: transparent;

  span {
    display: inline-block;
    width: 45%;
    height: 100px;
    background-size: cover;
    background-position: center;
  }
`;

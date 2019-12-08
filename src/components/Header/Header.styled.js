import styled from 'styled-components';
import * as vars from '../variables';
import SEARCH from './src/search.png';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-family: ${vars.$serif};
  padding: 0 30px;

  section {
    display: flex;
    align-items: center;
  }

  div {
    font-size: 20px;
    padding-left: 40px;
  }

  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url(${SEARCH});
    background-size: cover;
    background-position: center;
  }
`;

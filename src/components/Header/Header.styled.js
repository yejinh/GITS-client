import styled from 'styled-components';
import * as vars from '../variables';
import BURGER from './src/burger.png';
import SEARCH from './src/search.png';

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-family: ${vars.$serif};
  padding: 0 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 20px;
    background-image: url(${({ dir }) => dir === 'left' ? BURGER : SEARCH});
    background-size: cover;
    background-position: center;
  }
`;

import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNav = styled.div`
  border: 1px solid ${vars.$black};
  position: absolute;
  width: 300px;
  height: 100vh;
  font-family: ${vars.$serif};
  transform: ${({ isOpen }) => isOpen
    ? 'translateX(0)'
    : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  background-color: ${vars.$white};

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35% 0;
  }

  span {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-size: cover;
    background-position: center;
  }

  div {
    padding-top: 20px;

    :nth-child(2) {
      font-size: 20px;
    }

    :nth-child(3) {
      font-size: 15px;
      color: gray;
    }
  }
`;

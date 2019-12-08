import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNav = styled.div`
  border: 1px solid ${vars.$black};
  position: absolute;
  width: 250px;
  height: 100vh;
  transform: ${({ isOpen }) => isOpen
    ? 'translateX(0)'
    : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  button {
    position: absolute;
    right: -20px;
    visibility: ${({ isOpen }) => isOpen
      ? 'visible'
      : 'hidden' };
  }
`;

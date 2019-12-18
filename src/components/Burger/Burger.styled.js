import styled from 'styled-components';

export const StyledBurger = styled.button`
  border: none;
  position: absolute;
  display: flex;
  top: 25px;
  left: 40px;
  width: 25px;
  height: 25px;
  padding: 0;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  cursor: pointer;
  z-index: 200;

  :focus {
    outline: none;
  }

  div {
    position: relative;
    width: 25px;
    height: 2px;
    border-radius: 10px;
    transform-origin: 1px;
    background-color: black;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

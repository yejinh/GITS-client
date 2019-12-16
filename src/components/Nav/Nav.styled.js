import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNav = styled.div`
  border: 1px solid ${vars.$shadowGray};
  position: absolute;
  width: 300px;
  height: 100vh;
  font-family: ${vars.$serif};
  transform: ${({ isOpen }) => isOpen
    ? 'translateX(0)'
    : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  background-color: ${vars.$white};
  z-index: 100;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    :first-child {
      border-bottom: 1px solid ${vars.$shadowGray};
      padding: 30% 0;
      background-color: ${vars.$ivory};

      .like {
        position: absolute;
        top: 0;
        right: 25px;
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

        :nth-child(3) {
          font-size: 20px;
        }

        :nth-child(4) {
          font-size: 15px;
          color: ${vars.$textGray};
        }
      }
    }

    :nth-child(2) {
      padding: 35% 0;

      a {
        position: relative;
        width: 180px;
        height: 45px;
        margin-bottom: 10%;
        text-align: center;
        overflow: hidden;
        color: ${vars.$black};

        .bar-left, .bar-right {
          display: inline-block;
          position: absolute;
          top: 20%;
        }

        .bar-left {
          left: 0;
        }

        .bar-right {
          right: 0;
        }

        .first {
          width: 60px;
        }

        .second, .third {
          width: 45px;
        }

        :hover {
          > span {
            border-bottom: 1px solid ${vars.$black};
          }
        }
      }
    }
  }

  .logout {
    border: 1px solid ${vars.$textGray};
    padding: 5px 10px;
    padding-bottom: 0;
    border-radius: 15px;
    color: ${vars.$textGray};
  }
`;

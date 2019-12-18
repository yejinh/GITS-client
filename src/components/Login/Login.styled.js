import styled from 'styled-components';
import * as vars from '../variables';

export const StyledLogin = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  video {
    width: 100%;
  }

  .login-background {
    border: 1px solid black;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${vars.$black};
    opacity: 0.3;
  }
`;

export const LoginBox = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transform: translate(-50%, -50%);

  div:nth-child(1) {
    margin-bottom: 60px;
    font-family: ${vars.$cursive};
    font-size: 70px;
    color: ${vars.$white};
  }

  div:nth-child(2) {
    margin-bottom: 50px;
    font-family: ${vars.$serif};
    font-size: 20px;
    color: ${vars.$white};
  }
`;

export const LoginButton = styled.button`
  border: 0;
  width: 180px;
  margin: 10px;
  padding: 10px;
  font-family: ${vars.$serif};
  font-size: 12px;
  border-radius: 5px;
  background-color: ${({ method }) =>
    method === 'facebook'
      ? vars.$facebookLogin
      :  vars.$googleLogin};

  cursor: pointer;

  :focus {
    outline: none;
  }
`;

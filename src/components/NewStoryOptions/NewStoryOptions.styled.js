import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryOptions = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  section {
    // border: 1px solid ${vars.$black};
    display: inline-block;
    width: 40%;
    height: 85%;
    margin: 0 auto;
    text-align: center;
    border-radius: 50px;
    transition: all 1s ease;
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    font-family: ${vars.$mono};
    font-weight: bold;
    font-size: 25px;
    color: ${vars.$black};
    transition: all .5s ease;

    :hover {
      background-color: ${vars.$ivory};
      box-shadow: 0 0 10px ${vars.$shadowGray};
    }

    > div {
      background-color: transparent;
      margin: 15px 0;
    }
  }
`;

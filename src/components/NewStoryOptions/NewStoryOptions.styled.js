import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryOptions = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  section {
    border: 1px solid ${vars.$black};
    display: inline-block;
    width: 40%;
    height: 85%;
    margin: 0 auto;
    text-align: center;
    border-radius: 50px;
    transition: all .5s ease;

    :hover {
      background-color: ${vars.$lightYellow};
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;

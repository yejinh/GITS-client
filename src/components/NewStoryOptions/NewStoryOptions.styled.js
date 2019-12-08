import styled from 'styled-components';
import * as vars from '../variables';

export const StyledNewStoryOptions = styled.div`
  border: 1px solid ${vars.$black};
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
    padding-top: 20%;
    text-align: center;
    border-radius: 50px;
    transition: all .5s ease;

    :hover {
      background-color: ${vars.$lightYellow};
    }
  }
`;

import styled from 'styled-components';
import * as vars from '../variables';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-family: ${vars.$serif};
  padding: 0 70px;

  section {
    display: flex;
    align-items: center;
  }

  a {
    font-size: 20px;
    padding-left: 40px;
    text-decoration: none;
    color: ${vars.$black};
  }
`;

import styled from 'styled-components';

const Icon = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${props => props.icon});
  background-size: cover;
  background-position: center;
`;

export default Icon;

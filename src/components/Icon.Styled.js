import styled from 'styled-components';

const Icon = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${props => props.icon});
  background-size: cover;
  background-position: center;
  transition: all .5s ease;
  opacity: ${props =>
    props.opacity === "true"
      ? 0.3
      : 1};

  :hover {
    opacity: ${props =>
      props.disable === "true"
        ? 0.3
        : 1};
    cursor: ${props =>
      props.disable === "true"
        ? "auto"
        : "pointer"};
  }
`;

export default Icon;

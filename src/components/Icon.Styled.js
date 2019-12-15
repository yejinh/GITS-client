import styled from 'styled-components';

const Icon = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${({ icon }) => icon});
  background-size: cover;
  background-position: center;
  transition: all .5s ease;
  opacity: ${({ opacity }) =>
    opacity === "true"
      ? 0.3
      : 1};

  :hover {
    opacity: ${({ disable }) =>
      disable === 0
        ? 0.3
        : 1};
    cursor: ${({ disable }) =>
      disable === 0
        ? "auto"
        : "pointer"};
  }
`;

export default Icon;

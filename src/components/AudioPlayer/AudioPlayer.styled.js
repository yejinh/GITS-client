import sytled from 'styled-components';

export const StyledAudioPlayer = sytled.div`
  display: flex;

  canvas {
    border: 1px solid black;
    width: 250px;
    height: 45px;
    border-radius: 5px;
  }

  .icon {
    display: flex;
    width: 45px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: orange;
  }
`;

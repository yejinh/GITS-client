import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { StyledAudioPlayer } from './AudioPlayer.styled';
import Icon from '../Icon.Styled';
import PLAY from './src/play.png';
import RECORD from './src/record.png';

export default function AudioPlayer({ audioUrl, setAudioUrl }) {
  const [ isRecording, setIsRecording ] = useState(false);
  const [ isPlaying, setIsPlaying ] = useState(true);
  // const [ duration, setDuration ] = useState();
  // const [ curTime, setCurTime ] = useState();

  const _toggleRecording = () => setIsRecording(!isRecording);
  const _onData = recordedBlob => console.log(recordedBlob);
  const _onStop = recordedBlob => setAudioUrl(recordedBlob.blobURL);

  const _togglePlaying = () => {
    setIsPlaying(!isPlaying);
    _playAudio();
  };

  const _playAudio = () => {
    // const audio = document.getElementById("audio");
    // const setAudioData = () => {
    //   setDuration(audio.duration);
    //   setCurTime(audio.currentTime);
    // };
    // const setAudioTime = () => setCurTime(audio.currentTime);

    // audio.addEventListener("loadeddata", setAudioData);
    // audio.addEventListener("timeupdate", setAudioTime);

    // console.log(isPlaying);
    const audio = new Audio(audioUrl);
    isPlaying ? audio.play() : audio.pause();
  };

  return (
    <StyledAudioPlayer>
      <div className="icon">
        <Icon
          icon={RECORD}
          size="35"
          onClick={_toggleRecording} />
      </div>
      <div className="icon">
        <Icon
          icon={PLAY}
          size="30"
          onClick={_togglePlaying} />
      </div>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onData={_onData}
        onStop={_onStop}
        strokeColor="#000"
        backgroundColor="#fff"
        mimeType={"audio/wav"}
        bufferSize={2048}
        sampleRate={44100} />
    </StyledAudioPlayer>
  );
}

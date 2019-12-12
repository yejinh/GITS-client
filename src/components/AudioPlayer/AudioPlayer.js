import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { StyledAudioPlayer } from './AudioPlayer.styled';

export default function AudioPlayer({ audioUrl, setAudioUrl }) {
  const [ isRecording, setIsRecording ] = useState(false);
  const [ isPlaying, setIsPlaying ] = useState(true);
  const [ duration, setDuration ] = useState();
  const [ curTime, setCurTime ] = useState();

  const _toggleRecording = () => setIsRecording(!isRecording);
  const _onData = recordedBlob => console.log(recordedBlob);
  const _onStop = recordedBlob => setAudioUrl(recordedBlob.blobURL);

  const _togglePlaying = () => {
    console.log(isPlaying, '1');
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
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onData={_onData}
        onStop={_onStop}
        strokeColor="#000"
        backgroundColor="transparent"
        mimeType={"audio/wav"}
        bufferSize={2048}
        sampleRate={44100} />
      <button onClick={_toggleRecording} type="button">Start</button>
      {/* <audio id="audio">
        <source src={audioUrl} type="audio/wav" />
      </audio> */}
      <button onClick={_togglePlaying}>Play</button>
    </StyledAudioPlayer>
  );
}

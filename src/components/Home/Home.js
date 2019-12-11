import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';
import { ReactMic } from 'react-mic';
import { StyledHome } from './Home.styled';

export default function Home(props) {
  const [ isNavOpened, setIsNaveOpened ] = useState(false);
  const [ isRecording, setIsRecording ] = useState(false);
  const [ audioUrl, setAudioUrl ] = useState(null);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();

  const { user } = props;

  const _handleNav = () => setIsNaveOpened(!isNavOpened);

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
    console.log(audioUrl);
    isPlaying ? audio.play() : audio.pause();
  };

  return (
    <>
      <Header />
      <Burger isOpen={isNavOpened} onButtonClick={_handleNav} />
      <Nav isOpen={isNavOpened} user={user} />
      <StyledHome>
        <div>Main</div>
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
        <button onClick={_toggleRecording} type="button">Start</button>
        <button onClick={_toggleRecording} type="button">Stop</button>
        <audio id="audio">
          <source src={audioUrl} type="audio/wav" />
        </audio>
        <button onClick={_togglePlaying}>Play</button>
        <button onClick={_togglePlaying}>Pause</button>
      </StyledHome>
    </>
  );
}

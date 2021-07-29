import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls.jsx";
import Backdrop from "./Backdrop.jsx";
import "./AudioPlayerStyle.css";



const AudioPlayer = ({ tracks }) => {
    // State
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

  
    // Destructure for conciseness
    const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  
    // Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);
  
    // Destructure for conciseness
    const { duration } = audioRef.current;
  
    const currentPercentage = duration
      ? `${(trackProgress / duration) * 100}%`
      : "0%";
    const trackStyling = `
      -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;
  
    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          toNextTrack();
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [1000]);
    };
  
    const onScrub = (value) => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    };
  
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    };
  
    const toPrevTrack = () => {
      if (trackIndex - 1 < 0) {
        setTrackIndex(tracks.length - 1);
      } else {
        setTrackIndex(trackIndex - 1);
      }
    };
  
    const toNextTrack = () => {
      if (trackIndex < tracks.length - 1) {
        setTrackIndex(trackIndex + 1);
      } else {
        setTrackIndex(0);
      }
    };
  
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);
  
    // Handles cleanup and setup when changing tracks
    useEffect(() => {
      audioRef.current.pause();
  
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef.current.currentTime);
  
      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        // Set the isReady ref as true for the next pass
        isReady.current = true;
      }
    }, [trackIndex]);
  
    useEffect(() => {
      // Pause and clean up on unmount
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);


    const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    }

   

  
    return (
      <div className="audio-player">
        <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
        />
        <div className="audio-player-body">
          <div className="track-info">
            <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
            />
            <div>
              <h4 className="title">{title}</h4>
              <h4 className="artist">{artist}</h4>
              <h4 className="artist">dummy</h4>
            </div>
            
          </div>
          
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />

          <div className="track-time">
              <h5>{calculateTime(audioRef.current.currentTime)}/{calculateTime(duration)}</h5>
              
              <output id="volume-output">100</output>
              <button><i class="fas fa-volume-off"></i></button>
              <input type="range" id="volume-slider" max="100" value="50"></input>
              <button><i class="fas fa-volume-down"></i></button>

          </div>
          
        </div>
        <Backdrop
          trackIndex={trackIndex}
          activeColor={color}
          isPlaying={isPlaying}
        />
      </div>
    );
  };
  
  export default AudioPlayer;


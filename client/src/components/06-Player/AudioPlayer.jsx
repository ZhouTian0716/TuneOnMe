import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls.jsx";

import "./AudioPlayerStyle.css";



const AudioPlayer = () => {
    
   

  
    return (
      <div className="audio-player">
        <input
            type="range"
            
            step="1"
            min="0"

            className="progress"
      
       
        />
        <div className="audio-player-body">
          <div className="track-info">
            <img
            className="artwork"
 
          
            />
            <div>
              <h4 className="title">title</h4>
              <h4 className="artist">artist</h4>
              <h4 className="artist">dummy</h4>
            </div>
            
          </div>
          
          <AudioControls/>

          <div className="track-time">
              
              
              <output id="volume-output">100</output>
              <button><i class="fas fa-volume-off"></i></button>
              <input type="range" id="volume-slider" max="100" value="50"></input>
              <button><i class="fas fa-volume-down"></i></button>

          </div>
          
        </div>
        
      </div>
    );
  };
  
  export default AudioPlayer;


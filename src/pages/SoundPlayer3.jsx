import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './SoundPlayer3.css'; 

const SoundPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={require('./soundss.wav')} />
      <p className='sound3'>
        <button onClick={togglePlayPause} className="icon-button">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      sound of Podium 
      </p>

     
     
    </div>
  );
};

export default SoundPlayer;
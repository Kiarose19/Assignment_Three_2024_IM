import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './SoundPlayer2.css'; 

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
      <audio ref={audioRef} src={require('./sounds.wav')} />
      <p className='sound2'>
        <button onClick={togglePlayPause} className="icon-button">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      sound of F1 cars
      </p>

     
     
    </div>
  );
};

export default SoundPlayer;

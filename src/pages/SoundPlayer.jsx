import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './SoundPlayer.css'; 

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
      <audio ref={audioRef} src={require('./sound.wav')} />
      <p className='sound'>
        <button onClick={togglePlayPause} className="icon-button">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      sound of silverstone
      </p>

     
     
    </div>
  );
};

export default SoundPlayer;

/*used https://www.geeksforgeeks.org/how-to-toggle-play-pause-in-reactjs-with-audio/ */
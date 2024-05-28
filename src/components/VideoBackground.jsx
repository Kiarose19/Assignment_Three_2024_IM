import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
    return(
        <div className= "video-background">
           <video autoPlay loop muted>
             <source src= {`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4"/>
           </video>
           <div className="overlay"></div>
           <div className="content">
               <h1>SCUDERIA FERRARI</h1>
           </div>
        </div>
        
    );
};

export default VideoBackground;
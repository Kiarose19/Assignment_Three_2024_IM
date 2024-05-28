import React from "react";
import './ImageGallery.css';

const images = [
    "https://cdn.ferrari.com/cms/network/media/img/resize/64a3db16867a7e002308637f-new2tofm_3147053b_1920x1080?",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlFZSGgUpTBBqDeTU4Dl8kZUHHIU2Jo3Tv_FxIIsRPQ&s',
    'https://www.helitaly.com/wp-content/uploads/pista-imola.jpg',
    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/New-Races/DJI_0560.jpg',
    'https://e0.365dm.com/24/02/768x432/skysports-ferrari-sf24-launch_6454000.png?20240213110836',
    'https://media.formula1.com/image/upload/f_auto/q_auto/v1707821723/fom-website/2023/Miscellaneous/ferrari-sf-24-2.png',
    'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2023/Miscellaneous/ferrari-sf-24-5',
    'https://cdn.ferrari.com/cms/network/media/img/resize/65cb42c6604f1d0021785747-2024-scuderia-ferrari-sf-24-launch-desk',
    'https://www.formula1.com/fom-website/2023/Miscellaneous/ferrari-sf-24-7.png'
];

const ImageGallery = () => {
    return(
        <div className="image-gallery-container">
        <div className="image-gallery">
          {images.map((url, index) => (
            <div key={index} className="image-item">
               <img src= {url} alt={`Gallery Image ${index}`}/>
            </div>
          ))}
        </div>
        </div>
    );
};

export default ImageGallery;
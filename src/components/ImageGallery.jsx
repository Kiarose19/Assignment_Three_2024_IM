// src/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';

const MyImageGallery = () => {
    const images = [
        'https://via.placeholder.com/600x400?text=Image+1',
        'https://via.placeholder.com/600x400?text=Image+2',
        'https://via.placeholder.com/600x400?text=Image+3',
        'https://via.placeholder.com/600x400?text=Image+4',
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="image-gallery">
            <div className="selected-image">
                <img src={selectedImage} alt="Selected" />
            </div>
            <div className="thumbnail-row">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${image === selectedImage ? 'active' : ''}`}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyImageGallery;





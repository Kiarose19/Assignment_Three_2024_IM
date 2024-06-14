// src/BlogCarousel.js
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import { blogPosts } from './data';
import './BlogCarousel.css';

const BlogCarousel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  /*This keeps track of whether the pop-up is opened or closed. It initially starts out as false because the modal is closed. */
  const [selectedPost, setSelectedPost] = useState(null); /*This holds the data for the blog posts specifically the one that is currently opened. */

  const openModal = (post) => {
    setSelectedPost(post);        //This function is called when the user clicks the "read more" button. It sets selectedpost to the post that was clicked and modalIsOpen to true to open the modal.
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);       //This fucntion is called when the user wants to close the modal. It sets modalIsOpen to false to close the modal.
    setSelectedPost(null);
  };

  return (
    <div>
      <Carousel>
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.preview}</p>
            <button onClick={() => openModal(post)}>Read More</button>    
          </div>
        ))}
      </Carousel>

      {selectedPost && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Blog Post">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );                 /*used https://www.geeksforgeeks.org/how-to-create-a-responsive-carousel-in-react-js/ */
                     /*used https://jefferson-cuartas.medium.com/react-how-to-create-a-carousel-component-in-your-application-cc6891b09f5 */
};

export default BlogCarousel;

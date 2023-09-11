

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MyGallery = ({ scoures }) => {
  
  const images = scoures.map((image, index) => ({
    original: image,
    thumbnail: image,
  }));

  return <ImageGallery items={images} />;
};

export default MyGallery;

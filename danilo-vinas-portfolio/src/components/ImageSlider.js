// src/components/ImageSlider.js

import React from 'react';
import Slider from 'react-slick';
import '../css/ImageSlider.css'; // Ensure this path is correct

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        <div>
          <img src={require('../img/uno.jpeg')} alt="Slide 1" />
        </div>
        <div>
          <img src={require('../img/dos.jpeg')} alt="Slide 2" />
        </div>
        <div>
          <img src={require('../img/tres.jpeg')} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;

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
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    centerMode: true, // Enable center mode to show part of adjacent slides
    centerPadding: '0px', // No extra padding around the center slide
    arrows: false // Optional: hide navigation arrows if not needed
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

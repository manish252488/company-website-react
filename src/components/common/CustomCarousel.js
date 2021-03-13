import Carousel from "nuka-carousel";
import React from "react";
import PropTypes from "prop-types";
import "./carousel.less";
const CustomCarousel = (props) => {
  const { autoPlay, images } = props;
  return (
    <Carousel autoplay={autoPlay} enableKeyboardControls={true}>
      {images.map((val, index) => (
        <img key={index} src={val} alt={index} />
      ))}
    </Carousel>
  );
};
CustomCarousel.propTypes = {
  autoPlay: PropTypes.bool,
  images: PropTypes.array,
};

CustomCarousel.defaultProps = {
  autoPlay: true,
  images: [
    "https://p4.wallpaperbetter.com/wallpaper/145/266/383/paris-carousel-eiffel-tower-wallpaper-preview.jpg",
    "https://live.staticflickr.com/7678/17260399585_b32a535158_b.jpg",
    "https://media.gettyimages.com/photos/low-angle-view-of-merrygoround-and-eiffel-tower-at-sunset-picture-id1140679987?s=612x612",
  ],
};
export default CustomCarousel;

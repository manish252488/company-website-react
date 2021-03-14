import Carousel from "nuka-carousel";
import React from "react";
import PropTypes from "prop-types";
import "./carousel.less";
const CustomCarousel = (props) => {
  const { autoPlay, images, width, className } = props;
  return (
    <Carousel
      className={className}
      width={width}
      swiping={true}
      autoplay={autoPlay}
      autoplayReverse={true}
      enableKeyboardControls={true}
    >
      {props.components.length <= 0 &&
        images.map((val, index) => <img key={index} src={val} alt={index} />)}
      {props.components.length >= 0 && props.components}
    </Carousel>
  );
};
CustomCarousel.propTypes = {
  autoPlay: PropTypes.bool,
  images: PropTypes.array,
  width: PropTypes.any,
  components: PropTypes.array,
};

CustomCarousel.defaultProps = {
  autoPlay: true,
  components: [],
  images: [
    "https://p4.wallpaperbetter.com/wallpaper/145/266/383/paris-carousel-eiffel-tower-wallpaper-preview.jpg",
    "https://live.staticflickr.com/7678/17260399585_b32a535158_b.jpg",
    "https://media.gettyimages.com/photos/low-angle-view-of-merrygoround-and-eiffel-tower-at-sunset-picture-id1140679987?s=612x612",
  ],
  width: "100%",
};
export default CustomCarousel;

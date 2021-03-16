import Carousel from "nuka-carousel";
import React from "react";
import PropTypes from "prop-types";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
} from "../../assets";
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
  images: [carousel3, carousel1, carousel2, carousel5],
  width: "100%",
};
export default CustomCarousel;

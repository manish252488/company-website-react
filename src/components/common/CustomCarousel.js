import Carousel from "nuka-carousel";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { carousel1, carousel2, carousel3, carousel5 } from "../../assets";
import "./carousel.less";
const CustomCarousel = (props) => {
  const { autoPlay, images, width, className } = props;
  const [loading, setLoading] = useState(false);
  return (
    <Carousel
      className={className}
      width={width}
      swiping={true}
      autoplay={autoPlay}
      autoplayReverse={true}
      enableKeyboardControls={true}
    >
      {loading && <div>loading.............</div>}
      {props.components.length <= 0 &&
        images.map((val, index) => (
          <img
            key={index}
            src={val}
            alt={index}
            onLoadStart={() => setLoading(true)}
            onLoadedData={() => setLoading(false)}
          />
        ))}
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

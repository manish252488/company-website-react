import React from "react";
import Particles from "react-particles-js";
import PropTypes from "prop-types";
const Bubbles = (props) => {
  const { height, number, colors, speed, width, size, animSpeed } = props;
  return (
    <Particles
      height={height}
      width={width}
      params={{
        particles: {
          number: {
            value: number,
            density: {
              enable: false,
            },
          },
          move: {
            random: true,
            speed: speed,
            direction: "top",
            out_mode: "out",
          },
          color: {
            value: colors,
          },
          line_linked: {
            enable: false,
          },
          size: {
            value: size,
            random: true,
            anim: {
              speed: animSpeed,
              size_min: 0.3,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
};

Bubbles.propTypes = {
  height: PropTypes.any,
  number: PropTypes.number, // number of particles
  colors: PropTypes.array,
  speed: PropTypes.number,
  width: PropTypes.any,
  size: PropTypes.number,
  animSpeed: PropTypes.number,
};
Bubbles.defaultProps = {
  height: null,
  number: 150,
  colors: ["#333", "#fff", "#ddd"],
  speed: 1,
  width: null,
  size: 2,
  animSpeed: 4,
};
export default Bubbles;

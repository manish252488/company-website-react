import React from "react";
import PropTypes from "prop-types";
export default function VideoPlayer(props) {
  const { video } = props;
  return (
    <div className="video-player">
      <video width="100%" height="100%" id="background-video" loop autoPlay>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

VideoPlayer.propTypes = {
  video: PropTypes.any,
};

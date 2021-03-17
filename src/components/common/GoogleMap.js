import GoogleMapReact from "google-map-react";
import React from "react";
import PropTypes from "prop-types";
const GoogleMap = (props) => {
  const { lat, long, zoom, key } = props;
  const center = {
    lat: lat,
    lng: long,
  };
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <div lat={lat} lng={long} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
GoogleMap.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number,
  center: PropTypes.number,
  zoom: PropTypes.number,
  key: PropTypes.string,
};
GoogleMap.defaultProps = {
  lat: 25.612677,
  long: 85.158875,
  center: {
    lat: 25.612677,
    lng: 85.158875,
  },
  zoom: 11,
  key: "AIzaSyCKlfXwDKL_i5tgaXZldNkYC0hp8V1DV8g",
};
export default GoogleMap;

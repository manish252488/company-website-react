import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { carousel1, carousel2, carousel3 } from "../../assets";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});
const CustomCarousel = (props) => {
  const classes = useStyles();
  return (
    <Carousel className={classes.Carousel}>
      <div className={classes.Carousel}>
        <img src={carousel1} alt="carousel" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={carousel2} alt="carousel" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={carousel3} alt="carousel" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
export default CustomCarousel;

import React from "react";
import PropTypes from "prop-types";
import { Indicator } from "../Indicator";
import bemHelper from "../../utils/bem";
import "./slide.scss";
const cn = bemHelper({ block: "slide" });

export const Slide = ({ children, currentIndex, amountOfSlides }) => {
  return (
    <div className={cn("container")}>
      <div className={cn("content")}>{children}</div>
      <Indicator currentIndex={currentIndex} amountOfSlides={amountOfSlides} />
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  /* Represents the slide content */
  currentIndex: PropTypes.number,
  /* Represents the current number that is the current slide index in the carousel */
  amountOfSlides: PropTypes.number
  /* Represents the amount of slides alltogether */
};

export default Slide;

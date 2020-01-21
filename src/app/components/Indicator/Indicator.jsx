import React from "react";
import PropTypes from "prop-types";
import bemHelper from "../../utils/bem";

import "./indicator.scss";

const cn = bemHelper({ block: "indicators" });

export const Indicator = ({ currentIndex, amountOfSlides }) => {
  if (amountOfSlides === 0 || Number.isNaN(amountOfSlides)) {
    return null;
  }

  /* Creating an array with the amountOfSlides so we can map based on this count */
  const slideCount = [...Array(amountOfSlides)].map((_, i) => i);

  return (
    <div className={cn("container")}>
      {slideCount.map((c, index) => {
        const isIndexTheCurrentIndex = index === currentIndex;

        /* Return our circle indicators (filled or not depending if it represents the current slide)*/
        return (
          <span
            key={index}
            aria-label={`slide ${index + 1}`}
            className={`indicator-${index + 1}${
              isIndexTheCurrentIndex ? "--current" : ""
            }`}
          >
            <svg height="16" width="16">
              <circle
                cx="8"
                cy="8"
                r="2"
                stroke="white"
                strokeWidth="1"
                fill={isIndexTheCurrentIndex ? "white" : "none"}
              ></circle>
            </svg>
          </span>
        );
      })}
    </div>
  );
};

Indicator.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  /* Represents the index that the slide is on */
  amountOfSlides: PropTypes.number.isRequired
  /* The number of slides in the carousel */
};

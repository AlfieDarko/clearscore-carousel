import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import bemHelper from "../../utils/bem";
import "./carousel.scss";

const cn = bemHelper({ block: "carousel" });

export const Carousel = ({ children }) => {
  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const isCurrentSlideTheLastSlide = currentIndex === children.length - 1;
    const firstSlide = 0;
    const nextSlide = currentIndex + 1;
    setCurrentIndex(isCurrentSlideTheLastSlide ? firstSlide : nextSlide);
  };

  /* runs at every render */
  useEffect(() => {
    /* In each render, set a new timeout to go to the next slide */
    setTimeout(goToNextSlide, 5000);

    /* When un-mounting the slide from the DOM, clear the timeouts! */
    return function() {
      clearTimeout(goToNextSlide);
    };
  });

  return (
    <div className={cn("container")}>
      {React.Children.map(children, (child, index) => {
        const isIndexTheCurrentIndex = index === currentIndex;
        return (
          <div
            className={
              isIndexTheCurrentIndex
                ? cn("slide", "active")
                : cn("slide", "hidden")
            }
            key={index}
            aria-hidden={index !== currentIndex}
          >
            {React.cloneElement(child, {
              currentIndex,
              amountOfSlides: children.length
            })}
          </div>
        );
      })}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node
  /* Represents the slides passed to the component as children*/
};

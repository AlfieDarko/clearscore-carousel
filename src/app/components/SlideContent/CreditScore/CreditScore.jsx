import React from "react";
import PropTypes from "prop-types";
import bemHelper from "../../../utils/bem";
import Slide from "../../Slide/Slide";
import "./creditScore.scss";

const cn = bemHelper({ block: "credit-score" });

export const CreditScoreSlide = ({ score, currentIndex, amountOfSlides }) => {
  return (
    <Slide currentIndex={currentIndex} amountOfSlides={amountOfSlides}>
      <div className={cn("title")}>
        <p>Your credit score is</p>
      </div>
      <div className={cn("content")}>
        <p className={cn("score-text", "large")}>{score}</p>
        <p>
          out of <strong>700</strong>
        </p>
      </div>
      <div className={cn("status-text")}>
        <p>Souring high</p>
      </div>
    </Slide>
  );
};

CreditScoreSlide.propTypes = {
  score: PropTypes.number,
  /* Represents the credit score of our user */
  currentIndex: PropTypes.number,
  /* Represents the index the currently displayed slide is */
  amountOfSlides: PropTypes.number
  /* Represents the amount of slides in a carousel in total */
};

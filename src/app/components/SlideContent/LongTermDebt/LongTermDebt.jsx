import React from "react";
import PropTypes from "prop-types";
import bemHelper from "../../../utils/bem";
import Slide from "../../Slide/Slide";
import "./longTermDebt.scss";

const cn = bemHelper({ block: "longterm-debt" });

export const LongTermDebtSlide = ({
  longTermDebt,
  changeInLongTermDebt,
  currentIndex,
  amountOfSlides
}) => {
  return (
    <Slide currentIndex={currentIndex} amountOfSlides={amountOfSlides}>
      <p> Your long term debt total</p>
      <p className={cn("amount")}>£{longTermDebt}</p>
      <p className={cn("status")}>
        Down <strong>£{changeInLongTermDebt}</strong> since last month
      </p>
    </Slide>
  );
};

LongTermDebtSlide.propTypes = {
  longTermDebt: PropTypes.number,
  /* Represents the amount of Long Term Debt our user has */
  changeInLongTermDebt: PropTypes.number,
  /*Represents the change in Long Term Debt from the previous Month*/
  currentIndex: PropTypes.number,
  /* Represents the index that the currently displayed slide is */
  amountOfSlides: PropTypes.number
  /* Represents the amount of slides in the carousel in total */
};

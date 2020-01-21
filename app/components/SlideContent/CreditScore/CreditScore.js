"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditScoreSlide = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("../../../utils/bem"));

var _Slide = _interopRequireDefault(require("../../Slide/Slide"));

require("./creditScore.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = (0, _bem.default)({
  block: "credit-score"
});

var CreditScoreSlide = function CreditScoreSlide(_ref) {
  var score = _ref.score,
      currentIndex = _ref.currentIndex,
      amountOfSlides = _ref.amountOfSlides;
  return _react.default.createElement(_Slide.default, {
    currentIndex: currentIndex,
    amountOfSlides: amountOfSlides
  }, _react.default.createElement("div", {
    className: cn("title")
  }, _react.default.createElement("p", null, "Your credit score is")), _react.default.createElement("div", {
    className: cn("content")
  }, _react.default.createElement("p", {
    className: cn("score-text", "large")
  }, score), _react.default.createElement("p", null, "out of ", _react.default.createElement("strong", null, "700"))), _react.default.createElement("div", {
    className: cn("status-text")
  }, _react.default.createElement("p", null, "Souring high")));
};

exports.CreditScoreSlide = CreditScoreSlide;
CreditScoreSlide.propTypes = {
  score: _propTypes.default.number,

  /* Represents the credit score of our user */
  currentIndex: _propTypes.default.number,

  /* Represents the index the currently displayed slide is */
  amountOfSlides: _propTypes.default.number
  /* Represents the amount of slides in a carousel in total */

};
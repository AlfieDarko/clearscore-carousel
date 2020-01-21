"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongTermDebtSlide = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("../../../utils/bem"));

var _Slide = _interopRequireDefault(require("../../Slide/Slide"));

require("./longTermDebt.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = (0, _bem.default)({
  block: "longterm-debt"
});

var LongTermDebtSlide = function LongTermDebtSlide(_ref) {
  var longTermDebt = _ref.longTermDebt,
      changeInLongTermDebt = _ref.changeInLongTermDebt,
      currentIndex = _ref.currentIndex,
      amountOfSlides = _ref.amountOfSlides;
  return _react.default.createElement(_Slide.default, {
    currentIndex: currentIndex,
    amountOfSlides: amountOfSlides
  }, _react.default.createElement("p", null, " Your long term debt total"), _react.default.createElement("p", {
    className: cn("amount")
  }, "\xA3", longTermDebt), _react.default.createElement("p", {
    className: cn("status")
  }, "Down ", _react.default.createElement("strong", null, "\xA3", changeInLongTermDebt), " since last month"));
};

exports.LongTermDebtSlide = LongTermDebtSlide;
LongTermDebtSlide.propTypes = {
  longTermDebt: _propTypes.default.number,

  /* Represents the amount of Long Term Debt our user has */
  changeInLongTermDebt: _propTypes.default.number,

  /*Represents the change in Long Term Debt from the previous Month*/
  currentIndex: _propTypes.default.number,

  /* Represents the index that the currently displayed slide is */
  amountOfSlides: _propTypes.default.number
  /* Represents the amount of slides in the carousel in total */

};
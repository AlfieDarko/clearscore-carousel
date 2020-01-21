"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slide = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Indicator = require("../Indicator");

var _bem = _interopRequireDefault(require("../../utils/bem"));

require("./slide.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = (0, _bem.default)({
  block: "slide"
});

var Slide = function Slide(_ref) {
  var children = _ref.children,
      currentIndex = _ref.currentIndex,
      amountOfSlides = _ref.amountOfSlides;
  return _react.default.createElement("div", {
    className: cn("container")
  }, _react.default.createElement("div", {
    className: cn("content")
  }, children), _react.default.createElement(_Indicator.Indicator, {
    currentIndex: currentIndex,
    amountOfSlides: amountOfSlides
  }));
};

exports.Slide = Slide;
Slide.propTypes = {
  children: _propTypes.default.node.isRequired,

  /* Represents the slide content */
  currentIndex: _propTypes.default.number,

  /* Represents the current number that is the current slide index in the carousel */
  amountOfSlides: _propTypes.default.number
  /* Represents the amount of slides alltogether */

};
var _default = Slide;
exports.default = _default;
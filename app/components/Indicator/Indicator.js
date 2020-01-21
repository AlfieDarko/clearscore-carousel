"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Indicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("../../utils/bem"));

require("./indicator.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cn = (0, _bem.default)({
  block: "indicators"
});

var Indicator = function Indicator(_ref) {
  var currentIndex = _ref.currentIndex,
      amountOfSlides = _ref.amountOfSlides;

  if (amountOfSlides === 0 || Number.isNaN(amountOfSlides)) {
    return null;
  }
  /* Creating an array with the amountOfSlides so we can map based on this count */


  var slideCount = _toConsumableArray(Array(amountOfSlides)).map(function (_, i) {
    return i;
  });

  return _react.default.createElement("div", {
    className: cn("container")
  }, slideCount.map(function (c, index) {
    var isIndexTheCurrentIndex = index === currentIndex;
    /* Return our circle indicators (filled or not depending if it represents the current slide)*/

    return _react.default.createElement("span", {
      key: index,
      "aria-label": "slide ".concat(index + 1),
      className: "indicator-".concat(index + 1).concat(isIndexTheCurrentIndex ? "--current" : "")
    }, _react.default.createElement("svg", {
      height: "16",
      width: "16"
    }, _react.default.createElement("circle", {
      cx: "8",
      cy: "8",
      r: "2",
      stroke: "white",
      strokeWidth: "1",
      fill: isIndexTheCurrentIndex ? "white" : "none"
    })));
  }));
};

exports.Indicator = Indicator;
Indicator.propTypes = {
  currentIndex: _propTypes.default.number.isRequired,

  /* Represents the index that the slide is on */
  amountOfSlides: _propTypes.default.number.isRequired
  /* The number of slides in the carousel */

};
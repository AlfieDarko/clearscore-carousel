"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("../../utils/bem"));

require("./carousel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cn = (0, _bem.default)({
  block: "carousel"
});

var Carousel = function Carousel(_ref) {
  var children = _ref.children;

  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var goToNextSlide = function goToNextSlide() {
    var isCurrentSlideTheLastSlide = currentIndex === children.length - 1;
    var firstSlide = 0;
    var nextSlide = currentIndex + 1;
    setCurrentIndex(isCurrentSlideTheLastSlide ? firstSlide : nextSlide);
  };
  /* runs at every render */


  (0, _react.useEffect)(function () {
    /* In each render, set a new timeout to go to the next slide */
    setTimeout(goToNextSlide, 5000);
    /* When un-mounting the slide from the DOM, clear the timeouts! */

    return function () {
      clearTimeout(goToNextSlide);
    };
  });
  return _react.default.createElement("div", {
    className: cn("container")
  }, _react.default.Children.map(children, function (child, index) {
    var isIndexTheCurrentIndex = index === currentIndex;
    return _react.default.createElement("div", {
      className: isIndexTheCurrentIndex ? cn("slide", "active") : cn("slide", "hidden"),
      key: index,
      "aria-hidden": index !== currentIndex
    }, _react.default.cloneElement(child, {
      currentIndex: currentIndex,
      amountOfSlides: children.length
    }));
  }));
};

exports.Carousel = Carousel;
Carousel.propTypes = {
  children: _propTypes.default.node
  /* Represents the slides passed to the component as children*/

};
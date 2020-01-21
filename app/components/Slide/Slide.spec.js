"use strict";

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Slide = require("./Slide");

var _Indicator = require("../Indicator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

describe("Slide Component", function () {
  var component;
  var props;
  beforeEach(function () {
    props = {
      currentIndex: 1,
      amountOfSlides: 2
    };
    component = (0, _enzyme.shallow)(_react.default.createElement(_Slide.Slide, props, _react.default.createElement("div", {
      className: "findme"
    }, "empty")));
  });
  it("should render with Indicator Component",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var indicator;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            indicator = component.find(_Indicator.Indicator);
            expect(indicator).toHaveLength(1);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  it("should render any children", function () {
    var childElement = component.children().find(".findme");
    expect(childElement).toHaveLength(1);
  });
});
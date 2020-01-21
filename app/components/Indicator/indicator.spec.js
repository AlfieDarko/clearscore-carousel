"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Indicator = require("./Indicator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Indicator", function () {
  describe("given amount of slides is 1 ", function () {
    var props = {
      currentIndex: 0,
      amountOfSlides: 1,
      goToNextSlide: undefined
    };
    var indicatorComponent = (0, _enzyme.shallow)(_react.default.createElement(_Indicator.Indicator, props));
    it("should render only one indicator", function () {
      var container = indicatorComponent.find(".indicators__container").find(".indicator-1--current");
      expect(container).toHaveLength(1);
    });
  });
  describe("given amount of slides is 2+", function () {
    var props = {
      currentIndex: 0,
      amountOfSlides: 2,
      goToNextSlide: undefined
    };
    var indicatorComponent = (0, _enzyme.shallow)(_react.default.createElement(_Indicator.Indicator, props));
    it("should render 2+ indicators", function () {
      expect(indicatorComponent.find(".indicators__container")).toHaveLength(1);
      expect(indicatorComponent.find(".indicators__container").find(".indicator-1--current")).toHaveLength(1);
      expect(indicatorComponent.find(".indicators__container").find(".indicator-2")).toHaveLength(1);
    });
    describe("given currentIndex is 1", function () {
      it("should render the 2nd indicator as the current", function () {
        expect(indicatorComponent.find(".indicators__container")).toHaveLength(1);
      });
    });
  });
  describe("given currentIndex is 0", function () {
    var props = {
      currentIndex: 0,
      amountOfSlides: 2,
      goToNextSlide: undefined
    };
    var indicatorComponent = (0, _enzyme.shallow)(_react.default.createElement(_Indicator.Indicator, props));
    var indicatorsContainer = indicatorComponent.find(".indicators__container");
    var currentIndicator = indicatorsContainer.find(".indicator-1--current");
    it("should find the first circle is filled", function () {
      expect(indicatorsContainer).toHaveLength(1);
      expect(currentIndicator).toHaveLength(1);
      expect(indicatorComponent.find(".indicators__container").find(".indicator-2")).toHaveLength(1);
      expect(indicatorsContainer.find(".indicators__container").find(".indicator-1--current").find("circle").prop("fill")).toBe("white");
    });
    it("should find the second circle is not filled", function () {
      expect(indicatorComponent.find(".indicators__container").find(".indicator-2")).toHaveLength(1);
      expect(indicatorComponent.find(".indicators__container").find(".indicator-2").find("circle").prop("fill")).toBe("none");
    });
  });
  describe("given currentIndex is 1", function () {
    var props = {
      currentIndex: 1,
      amountOfSlides: 2,
      goToNextSlide: undefined
    };
    var indicatorComponent = (0, _enzyme.shallow)(_react.default.createElement(_Indicator.Indicator, props));
    var indicatorsContainer = indicatorComponent.find(".indicators__container");
    it("should find the second circle is filled", function () {
      expect(indicatorsContainer.find(".indicator-2--current")).toHaveLength(1);
      expect(indicatorComponent.find(".indicators__container").find(".indicator-2--current").find("circle").prop("fill")).toBe("white");
    });
    it("should find the first circle is not filled ", function () {
      expect(indicatorsContainer.find(".indicator-1")).toHaveLength(1);
      expect(indicatorComponent.find(".indicators__container").find(".indicator-1").find("circle").prop("fill")).toBe("none");
    });
  });
});
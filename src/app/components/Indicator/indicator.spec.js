import React from "react";
import { shallow } from "enzyme";
import { Indicator } from "./Indicator";

describe("Indicator", () => {
  describe("given amount of slides is 1 ", () => {
    const props = {
      currentIndex: 0,
      amountOfSlides: 1,
      goToNextSlide: undefined
    };
    const indicatorComponent = shallow(<Indicator {...props} />);

    it("should render only one indicator", () => {
      let container = indicatorComponent
        .find(".indicators__container")
        .find(".indicator-1--current");
      expect(container).toHaveLength(1);
    });
  });

  describe("given amount of slides is 2+", () => {
    const props = {
      currentIndex: 0,
      amountOfSlides: 2,
      goToNextSlide: undefined
    };
    const indicatorComponent = shallow(<Indicator {...props} />);
    it("should render 2+ indicators", () => {
      expect(indicatorComponent.find(".indicators__container")).toHaveLength(1);

      expect(
        indicatorComponent
          .find(".indicators__container")
          .find(".indicator-1--current")
      ).toHaveLength(1);

      expect(
        indicatorComponent.find(".indicators__container").find(".indicator-2")
      ).toHaveLength(1);
    });

    describe("given currentIndex is 1", () => {
      it("should render the 2nd indicator as the current", () => {
        expect(indicatorComponent.find(".indicators__container")).toHaveLength(
          1
        );
      });
    });
  });

  describe("given currentIndex is 0", () => {
    const props = {
      currentIndex: 0,
      amountOfSlides: 2,
      goToNextSlide: undefined
    };
    const indicatorComponent = shallow(<Indicator {...props} />);
    const indicatorsContainer = indicatorComponent.find(
      ".indicators__container"
    );
    const currentIndicator = indicatorsContainer.find(".indicator-1--current");
    it("should find the first circle is filled", () => {
      expect(indicatorsContainer).toHaveLength(1);
      expect(currentIndicator).toHaveLength(1);
      expect(
        indicatorComponent.find(".indicators__container").find(".indicator-2")
      ).toHaveLength(1);
      expect(
        indicatorsContainer
          .find(".indicators__container")
          .find(".indicator-1--current")
          .find("circle")
          .prop("fill")
      ).toBe("white");
    });

    it("should find the second circle is not filled", () => {
      expect(
        indicatorComponent.find(".indicators__container").find(".indicator-2")
      ).toHaveLength(1);

      expect(
        indicatorComponent
          .find(".indicators__container")
          .find(".indicator-2")
          .find("circle")
          .prop("fill")
      ).toBe("none");
    });
  });

  describe("given currentIndex is 1", () => {
    const props = {
      currentIndex: 1,
      amountOfSlides: 2,
      goToNextSlide: undefined
    };
    const indicatorComponent = shallow(<Indicator {...props} />);
    const indicatorsContainer = indicatorComponent.find(
      ".indicators__container"
    );
    it("should find the second circle is filled", () => {
      expect(indicatorsContainer.find(".indicator-2--current")).toHaveLength(1);
      expect(
        indicatorComponent
          .find(".indicators__container")
          .find(".indicator-2--current")
          .find("circle")
          .prop("fill")
      ).toBe("white");
    });

    it("should find the first circle is not filled ", () => {
      expect(indicatorsContainer.find(".indicator-1")).toHaveLength(1);
      expect(
        indicatorComponent
          .find(".indicators__container")
          .find(".indicator-1")
          .find("circle")
          .prop("fill")
      ).toBe("none");
    });
  });
});

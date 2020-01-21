import React from "react";
import { shallow } from "enzyme";
import { Slide } from "./Slide";
import { Indicator } from "../Indicator";
describe("Slide Component", () => {
  let component;
  let props;
  beforeEach(() => {
    props = { currentIndex: 1, amountOfSlides: 2 };
    component = shallow(
      <Slide {...props}>
        <div className="findme">empty</div>
      </Slide>
    );
  });
  it("should render with Indicator Component", async () => {
    const indicator = component.find(Indicator);
    expect(indicator).toHaveLength(1);
  });

  it("should render any children", () => {
    const childElement = component.children().find(".findme");
    expect(childElement).toHaveLength(1);
  });
});

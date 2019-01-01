import React from "react";
import { shallow } from "enzyme";
import { Card } from "./index";

describe("<Card />", () => {
  it("renders without crashing", () => {
    shallow(<Card front={""} back={""} />);
  });

  it("after mounting displays `props.card.front` to `.card--text`", () => {
    const front = "front";
    const wrapper = shallow(<Card front={front} back={""} />);
    expect(wrapper.find(".card--text").text()).toBe(front);
  });

  it("flips card when button is pressed", () => {
    const front = "front";
    const back = "back";
    const wrapper = shallow(<Card front={front} back={back} />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".card--text").text()).toBe(back);
  });
});
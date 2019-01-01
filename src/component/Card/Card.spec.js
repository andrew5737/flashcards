import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Card } from "./index";

describe("<Card />", () => {
  it("renders without crashing", () => {
    shallow(<Card />);
  });

  it("after mounting displays `props.card.front` to `.card--text`", () => {
    const front = "front";
    const wrapper = shallow(<Card front={front} />);
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

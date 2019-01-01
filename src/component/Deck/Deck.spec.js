import React from "react";
import { Deck } from "./index";
import { shallow } from "enzyme";

describe("<Deck />", () => {
  it("renders without crashing", () => {
    shallow(<Deck />);
  });

  it("renders text `props.name` inside `.deck--name` (1)", () => {
    const name = "name1";
    const wrapper = shallow(<Deck name={name} />);
    expect(wrapper.find(".deck--name").text()).toBe(name);
  });

  it("renders text `props.name` inside `.deck--name` (2)", () => {
    const name = "name2";
    const wrapper = shallow(<Deck name={name} />);
    expect(wrapper.find(".deck--name").text()).toBe(name);
  });
});

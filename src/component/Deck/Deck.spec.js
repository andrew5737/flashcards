import React from "react";
import ReactDOM from "react-dom";
import { Deck } from "./index";
import { shallow } from "enzyme";

describe("<Deck />", () => {
  it("renders without crashing", () => {
    shallow(<Deck />);
  });

  it("renders text `props.deckName` inside `.deck--name` (1)", () => {
    const deckName = "deckName1";
    const wrapper = shallow(<Deck deckName={deckName} />);
    expect(wrapper.find(".deck--name").text()).toBe(deckName);
  });

  it("renders text `props.deckName` inside `.deck--name` (2)", () => {
    const deckName = "deckName2";
    const wrapper = shallow(<Deck deckName={deckName} />);
    expect(wrapper.find(".deck--name").text()).toBe(deckName);
  });
});

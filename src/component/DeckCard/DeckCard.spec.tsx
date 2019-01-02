import React from "react";
import { shallow } from "enzyme";
import { DeckCard } from "./index";

describe("<DeckCard />", () => {
  it("renders without crashing", () => {
    shallow(<DeckCard front={""} back={""} />);
  });

  it("after mounting displays `props.card.front` to `.card--text`", () => {
    const front = "front";
    const wrapper = shallow(<DeckCard front={front} back={""} />);
    expect(wrapper.find(".card--text").text()).toBe(front);
  });

  it("flips card when button is pressed", () => {
    const front = "front";
    const back = "back";
    const wrapper = shallow(<DeckCard front={front} back={back} />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".card--text").text()).toBe(back);
  });
});

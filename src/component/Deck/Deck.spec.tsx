import React from "react";
import { shallow } from "enzyme";
import { Deck } from "./index";

describe("<Deck />", () => {
  it("renders without crashing", () => {
    shallow(<Deck name={"name"} cards={[]} />);
  });

  it("displays deck name", () => {
    const deckName = "name";
    const wrapper = shallow(<Deck name={deckName} cards={[]} />);
    expect(wrapper.find(".deck--name").text()).toBe(deckName);
  });
});

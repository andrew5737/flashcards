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

  it("calls props.onDeckSelected when deck is clicked", () => {
    const onDeckSelectedMock = jest.fn();
    const wrapper = shallow(<Deck name={"name"} onDeckSelected={onDeckSelectedMock} />);
    wrapper.find(".deck").simulate("click");
    expect(onDeckSelectedMock.mock.calls.length).toBe(1);
  });

  it("passes deck.id to props.onDeckSelected when deck is clicked", () => {
    const onDeckSelectedMock = jest.fn();
    const deckId = 1214;
    const wrapper = shallow(<Deck name={"name"} id={deckId} onDeckSelected={onDeckSelectedMock} />);
    wrapper.find(".deck").simulate("click");
    expect(onDeckSelectedMock.mock.calls.length).toBe(1);
    expect(onDeckSelectedMock.mock.calls[0][0]).toBe(deckId);
  });
});

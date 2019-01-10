import React from "react";
import { DeckListThumbnail } from "./index";
import { shallow } from "enzyme";

describe("<Deck />", () => {
  it("renders without crashing", () => {
    shallow(<DeckListThumbnail id={0} name={""} />);
  });

  it("renders text `props.name` inside `.deck-thumbnail--name` (1)", () => {
    const name = "name1";
    const wrapper = shallow(<DeckListThumbnail id={0} name={name} />);
    expect(wrapper.find(".deck-thumbnail--name").text()).toBe(name);
  });

  it("renders text `props.name` inside `.deck-thumbnail--name` (2)", () => {
    const name = "name2";
    const wrapper = shallow(<DeckListThumbnail id={0} name={name} />);
    expect(wrapper.find(".deck-thumbnail--name").text()).toBe(name);
  });

  it("calls props.select when deck is clicked", () => {
    const selectMock = jest.fn();
    const wrapper = shallow(
      <DeckListThumbnail id={0} name={"name"} select={selectMock} />
    );
    wrapper.find(".deck-thumbnail").simulate("click");
    expect(selectMock.mock.calls.length).toBe(1);
  });

  it("passes deck.id to props.select when deck is clicked", () => {
    const selectMock = jest.fn();
    const deckId = 1214;
    const wrapper = shallow(
      <DeckListThumbnail name={"name"} id={deckId} select={selectMock} />
    );
    wrapper.find(".deck-thumbnail").simulate("click");
    expect(selectMock.mock.calls.length).toBe(1);
    expect(selectMock.mock.calls[0][0]).toBe(deckId);
  });
});

import React from "react";
import { DeckList } from "./index";
import { shallow } from "enzyme";
import { DeckThumbnail } from "../DeckThumbnail";

describe("Deck", () => {
  it("renders without crashing", () => {
    shallow(<DeckList />);
  });

  it("renders a list of deck (provided by `props.decks`)", () => {
    const decks = [{ name: "deck1" }, { name: "deck2" }, { name: "deck3" }];
    const wrapper = shallow(<DeckList decks={decks} />);

    expect(wrapper.find(".deck-list").children()).toHaveLength(decks.length);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(0)
        .type()
    ).toEqual(DeckThumbnail);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(1)
        .type()
    ).toEqual(DeckThumbnail);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(2)
        .type()
    ).toEqual(DeckThumbnail);
  });

  it("renders a list of deck (provided by `props.decks`)", () => {
    const decks = [{ name: "deck1" }, { name: "deck2" }];
    const wrapper = shallow(<DeckList decks={decks} />);

    expect(wrapper.find(".deck-list").children()).toHaveLength(decks.length);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(0)
        .type()
    ).toEqual(DeckThumbnail);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(1)
        .type()
    ).toEqual(DeckThumbnail);
  });

  it("ensure that each deck has a key corresponding to it's index", () => {
    const decks = [{ name: "deck1" }, { name: "deck2" }];
    const wrapper = shallow(<DeckList decks={decks} />);

    expect(wrapper.find(".deck-list").children()).toHaveLength(decks.length);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(0)
        .key()
    ).toEqual("0");

    expect(
      wrapper
        .find(".deck-list")
        .childAt(1)
        .key()
    ).toEqual("1");
  });

  it("ensure that each deck receives it's name as a prop", () => {
    const decks = [{ name: "deck1" }, { name: "deck2" }];
    const wrapper = shallow(<DeckList decks={decks} />);

    expect(wrapper.find(".deck-list").children()).toHaveLength(decks.length);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(0)
        .prop("name")
    ).toEqual(decks[0].name);

    expect(
      wrapper
        .find(".deck-list")
        .childAt(1)
        .prop("name")
    ).toEqual(decks[1].name);
  });
});

import React from "react";
import { DeckList } from "./index";
import { shallow } from "enzyme";
import { Deck } from "../../entities/Deck";
import DeckListThumbnailContainer from "../../containers/DeckListThumbnailContainer";

describe("Deck", () => {
  it("renders without crashing", () => {
    shallow(<DeckList />);
  });

  it("renders a list of deck (provided by `props.decks`)", () => {
    const decks = [new Deck(0, "deck0"), new Deck(1, "deck1"), new Deck(3, "deck3")];
    const wrapper = shallow(<DeckList decks={decks} />);

    expect(wrapper.find(".deck-list").children()).toHaveLength(decks.length);
    expect(
      wrapper
        .find(".deck-list")
        .childAt(0)
        .type()
    ).toEqual(DeckListThumbnailContainer);
    expect(
      wrapper
        .find(".deck-list")
        .childAt(1)
        .type()
    ).toEqual(DeckListThumbnailContainer);
    expect(
      wrapper
        .find(".deck-list")
        .childAt(2)
        .type()
    ).toEqual(DeckListThumbnailContainer);
  });

  it("renders a list of deck (provided by `props.decks`)", () => {
    const decks = [new Deck(0, "deck0"), new Deck(1, "deck1")];
    const wrapper = shallow(<DeckList decks={decks} />);

    expect(wrapper.find(".deck-list").children()).toHaveLength(decks.length);
    expect(
      wrapper
        .find(".deck-list")
        .childAt(0)
        .type()
    ).toEqual(DeckListThumbnailContainer);
    expect(
      wrapper
        .find(".deck-list")
        .childAt(1)
        .type()
    ).toEqual(DeckListThumbnailContainer);
  });

  it("ensure that each deck has a key corresponding to it's index", () => {
    const decks = [new Deck(0, "deck0"), new Deck(1, "deck1")];
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
    const decks = [new Deck(0, "deck0"), new Deck(1, "deck1")];
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

import React from "react";
import { shallow } from "enzyme";
import { Deck } from "./index";
import { Card } from "../../entities/Card";
import { DeckCard } from "../DeckCard";

describe("<Deck />", () => {
  it("renders without crashing", () => {
    shallow(<Deck id={0} name={"name"} cards={[]} />);
  });

  it("displays deck name", () => {
    const deckName = "name";
    const wrapper = shallow(<Deck id={0} name={deckName} cards={[]} />);
    expect(wrapper.find(".deck--name").text()).toBe(deckName);
  });

  it("displays right number of Card components", () => {
    const deckId = 0;
    const cards = [
      new Card(0, "front0", "back0", deckId),
      new Card(1, "front1", "back1", deckId),
      new Card(2, "front2", "back2", deckId),
      new Card(3, "front3", "back3", deckId)
    ];
    const wrapper = shallow(<Deck id={deckId} name={"name"} cards={cards} />);

    const deckCards = wrapper.find(".deck--cards");
    expect(deckCards.children().length).toBe(cards.length);
    for (let i = 0; i < cards.length; i++)
      expect(deckCards.childAt(i).type()).toBe(DeckCard);
  });

  it("displays the correct Card details", () => {
    const deckId = 0;
    const cards = [
      new Card(0, "front0", "back0", deckId),
      new Card(1, "front1", "back1", deckId),
      new Card(2, "front2", "back2", deckId),
      new Card(3, "front3", "back3", deckId)
    ];
    const wrapper = shallow(<Deck id={deckId} name={"name"} cards={cards} />);

    const deckCards = wrapper.find(".deck--cards");
    expect(deckCards.children().length).toBe(cards.length);
    cards.forEach((card, index) => {
      const cardComponentProps = deckCards.childAt(index).props();
      expect(cardComponentProps.front).toBe(card.front);
      expect(cardComponentProps.back).toBe(card.back);
    });
  });
});

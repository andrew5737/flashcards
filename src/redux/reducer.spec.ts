import reducer, { defaultState } from "./reducer";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";
import { initializeApiAction } from "./actions";

describe("reducer", () => {
  describe("case getType(initializeApiAction.success)", () => {
    it("returns state containing the decks and cards from the action payload", () => {
      const decks = [new Deck(0, "deck0")];
      const cards = [new Card(0, "front", "back", 0)];

      const state = reducer(
        defaultState,
        initializeApiAction.success({ decks, cards })
      );

      expect(state).toEqual({ ...defaultState, decks, cards });
    });
  });
});

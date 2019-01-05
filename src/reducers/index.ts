import { ActionTypeInitialize, requestToGetCoinsSuccess } from "../actions";
import { ActionType, getType } from "typesafe-actions";
import { Card } from "../entities/Card";
import { Deck } from "../entities/Deck";

interface ApplicationState {
  decks: Deck[];
  cards: Card[];
}

const defaultState = {
  decks: [],
  cards: []
};

const decks = (
  state: ApplicationState = defaultState,
  action: ActionTypeInitialize
) => {
  switch (action.type) {
    case getType(requestToGetCoinsSuccess):
      return {
        decks: action.payload.decks,
        cards: action.payload.cards
      };
    default:
      return state;
  }
};

export default decks;

import { getType } from "typesafe-actions";
import { initializeApiSuccess } from "./actions";
import { ApplicationState, ActionTypes } from "./types";

const defaultState: ApplicationState = {
  decks: [],
  cards: []
};

const decks = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case getType(initializeApiSuccess):
      return {
        decks: action.payload.decks,
        cards: action.payload.cards
      };
    default:
      return state;
  }
};

export default decks;

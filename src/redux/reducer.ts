import { getType } from "typesafe-actions";
import { initializeApiSuccess } from "./actions";
import { ApplicationState, ActionTypes } from "./types";
import { Reducer } from "redux";

const defaultState: ApplicationState = {
  decks: [],
  cards: []
};

const reducer: Reducer<ApplicationState, ActionTypes> = (
  state = defaultState,
  action
) => {
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

export default reducer;

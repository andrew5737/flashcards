import { getType } from "typesafe-actions";
import { Reducer } from "redux";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { Card } from "../entities/Card";
import { Deck } from "../entities/Deck";

export type ActionTypes = ActionType<typeof actions>;

export interface ApplicationState {
  readonly selectedDeck: number;
  readonly decks: Deck[];
  readonly cards: Card[];
}

export const defaultState: ApplicationState = {
  selectedDeck: -1,
  decks: [],
  cards: []
};

const reducer: Reducer<ApplicationState, ActionTypes> = (state = defaultState, action) => {
  switch (action.type) {
    case getType(actions.initializeApi.success):
      return {
        ...state,
        decks: action.payload.decks,
        cards: action.payload.cards
      };
    default:
      return state;
  }
};

export default reducer;

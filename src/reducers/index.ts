import { INITIALIZE_API_SUCCESS } from "../actions";

const defaultState = {
  decks: [],
  cards: []
};

const decks = (state = defaultState, action: any) => {
  switch (action.type) {
    case INITIALIZE_API_SUCCESS:
      return {
        decks: action.decks,
        cards: action.cards
      };
    default:
      return state;
  }
};

export default decks;

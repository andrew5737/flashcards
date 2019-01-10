import { initialize, getAllDecks, getAllCards } from "../services/api";
import { dispatch } from "./store";
import { initializeApiAction, selectDeckAction } from "./actions";

export const initializeApi = async () => {
  dispatch(initializeApiAction.request());
  try {
    await initialize();
    const decks = await getAllDecks();
    const cards = await getAllCards();
    dispatch(initializeApiAction.success({ decks, cards }));
  } catch (e) {
    dispatch(initializeApiAction.failure(e));
  }
};

export const selectDeck = (id: number) => {
  dispatch(selectDeckAction(id));
};

import { initialize, getAllDecks, getAllCards } from "../services/api";
import { dispatch } from "./store";
import {
  initializeApiPending,
  initializeApiSuccess,
  initializeApiError
} from "./actions";

export const initializeApi = async () => {
  dispatch(initializeApiPending());
  try {
    await initialize();
    const decks = await getAllDecks();
    const cards = await getAllCards();
    dispatch(initializeApiSuccess(decks, cards));
  } catch (e) {
    dispatch(initializeApiError());
  }
};

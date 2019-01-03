import { initialize, getAllDecks, getAllCards } from "../services/api";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";

export const initializeApi = () => async (dispatch: any) => {
  dispatch(requestToGetCoinsPending());
  try {
    await initialize();
    const decks = await getAllDecks();
    const cards = await getAllCards();
    dispatch(requestToGetCoinsSuccess(decks, cards));
  } catch (e) {
    dispatch(requestToGetCoinsError());
  }
};

export const INITIALIZE_API_SUCCESS = "INITIALIZE_API_SUCCESS";
const requestToGetCoinsSuccess = (decks: Deck[], cards: Card[]) => ({
  type: INITIALIZE_API_SUCCESS,
  decks,
  cards
});

export const INITIALIZE_API_PENDING = "INITIALIZE_API_PENDING";
const requestToGetCoinsPending = () => ({
  type: INITIALIZE_API_PENDING
});

export const INITIALIZE_API_ERROR = "INITIALIZE_API_ERROR";
const requestToGetCoinsError = () => ({
  type: INITIALIZE_API_ERROR
});

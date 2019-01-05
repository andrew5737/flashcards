import { createAction, ActionType } from "typesafe-actions";
import { initialize, getAllDecks, getAllCards } from "../services/api";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";
import { Dispatch } from "redux";

export type ActionTypeInitialize = ActionType<
  | typeof requestToGetCoinsSuccess
  | typeof requestToGetCoinsPending
  | typeof requestToGetCoinsError
>;

export const requestToGetCoinsPending = createAction("INITIALIZE_API_PENDING");
export const requestToGetCoinsSuccess = createAction(
  "INITIALIZE_API_SUCCESS",
  resolve => (decks: Deck[], cards: Card[]) => resolve({ decks, cards })
);
export const requestToGetCoinsError = createAction("INITIALIZE_API_ERROR");

export const initializeApi = async (
  dispatch: Dispatch<ActionTypeInitialize>
) => {
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

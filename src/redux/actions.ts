import { createAction, ActionType } from "typesafe-actions";
import { initialize, getAllDecks, getAllCards } from "../services/api";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";

export type ActionTypeInitialize = ActionType<
  | typeof initializeApiSuccess
  | typeof initializeApiPending
  | typeof initializeApiError
>;

export const initializeApiPending = createAction("INITIALIZE_API_PENDING");
export const initializeApiSuccess = createAction(
  "INITIALIZE_API_SUCCESS",
  resolve => (decks: Deck[], cards: Card[]) => resolve({ decks, cards })
);
export const initializeApiError = createAction("INITIALIZE_API_ERROR");
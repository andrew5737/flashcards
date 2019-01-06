import { createAction } from "typesafe-actions";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";

export const initializeApiPending = createAction("INITIALIZE_API_PENDING");
export const initializeApiSuccess = createAction(
  "INITIALIZE_API_SUCCESS",
  resolve => (decks: Deck[], cards: Card[]) => resolve({ decks, cards })
);
export const initializeApiError = createAction("INITIALIZE_API_ERROR");

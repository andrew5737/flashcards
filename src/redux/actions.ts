import { createAsyncAction, createAction } from "typesafe-actions";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";

export const initializeApiAction = createAsyncAction(
  "INITIALIZE_API_PENDING",
  "INITIALIZE_API_SUCCESS",
  "INITIALIZE_API_ERROR"
)<void, { decks: Deck[]; cards: Card[] }, Error>();

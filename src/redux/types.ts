import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { Card } from "../entities/Card";
import { Deck } from "../entities/Deck";

export type ActionTypes = ActionType<typeof actions>;

export interface ApplicationState {
  decks: Deck[];
  cards: Card[];
}

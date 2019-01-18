import { createAsyncAction } from "typesafe-actions";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";
import { asyncActionCreator } from "./asyncActionFacadeBuilder";
import * as api from "../services/api";

export const initializeApi = createAsyncAction(
  "INITIALIZE_API_PENDING",
  "INITIALIZE_API_SUCCESS",
  "INITIALIZE_API_ERROR"
)<void, { decks: Deck[]; cards: Card[] }, Error>();

export const createDeck = createAsyncAction(
  "CREATE_DECK_PENDING",
  "CREATE_DECK_SUCCESS",
  "CREATE_DECK_ERROR"
)<void, Deck, Error>();

export const getDeck = asyncActionCreator(
  "GET_DECK_PENDING",
  "GET_DECK_SUCCESS",
  "GET_DECK_FAILURE",
  api.getDeck
);

export const getAllDecks = asyncActionCreator(
  "GET_ALL_DECK_PENDING",
  "GET_ALL_DECK_SUCCESS",
  "GET_ALL_DECK_FAILURE",
  api.getAllDecks
);

export const updateDeckName = createAsyncAction(
  "UPDATE_DECK_NAME_PENDING",
  "UPDATE_DECK_NAME_SUCCESS",
  "UPDATE_DECK_NAME_ERROR"
)<void, Deck | undefined, Error>();

export const deleteDeck = createAsyncAction(
  "DELETE_DECK_PENDING",
  "DELETE_DECK_SUCCESS",
  "DELETE_DECK_ERROR"
)<void, void, Error>();

export const createCard = createAsyncAction(
  "CREATE_CARD_PENDING",
  "CREATE_CARD_SUCCESS",
  "CREATE_CARD_ERROR"
)<void, Card, Error>();

export const getCard = createAsyncAction("GET_CARD_PENDING", "GET_CARD_SUCCESS", "GET_CARD_ERROR")<
  void,
  Card | undefined,
  Error
>();

export const getAllCards = createAsyncAction(
  "GET_ALL_CARDS_PENDING",
  "GET_ALL_CARDS_SUCCESS",
  "GET_ALL_CARDS_ERROR"
)<void, Card[], Error>();

export const getCardsInDeck = createAsyncAction(
  "GET_CARDS_IN_DECK_PENDING",
  "GET_CARDS_IN_DECK_SUCCESS",
  "GET_CARDS_IN_DECK_ERROR"
)<void, Card[], Error>();

export const updateCard = createAsyncAction(
  "UPDATE_CARD_PENDING",
  "UPDATE_CARD_SUCCESS",
  "UPDATE_CARD_ERROR"
)<void, void, Error>();

export const deleteCard = createAsyncAction(
  "DELETE_CARD_PENDING",
  "DELETE_CARD_SUCCESS",
  "DELETE_CARD_ERROR"
)<void, void, Error>();

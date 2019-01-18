import { asyncActionCreator } from "./asyncActionCreator";
import * as api from "../services/api";

export const initializeApi = asyncActionCreator(
  "INITIALIZE_API_PENDING",
  "INITIALIZE_API_SUCCESS",
  "INITIALIZE_API_ERROR",
  api.initialize
);

export const createDeck = asyncActionCreator(
  "CREATE_DECK_PENDING",
  "CREATE_DECK_SUCCESS",
  "CREATE_DECK_ERROR",
  api.createDeck
);

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

export const updateDeckName = asyncActionCreator(
  "UPDATE_DECK_NAME_PENDING",
  "UPDATE_DECK_NAME_SUCCESS",
  "UPDATE_DECK_NAME_ERROR",
  api.updateDeckName
);

export const deleteDeck = asyncActionCreator(
  "DELETE_DECK_PENDING",
  "DELETE_DECK_SUCCESS",
  "DELETE_DECK_ERROR",
  api.deleteDeck
);

export const createCard = asyncActionCreator(
  "CREATE_CARD_PENDING",
  "CREATE_CARD_SUCCESS",
  "CREATE_CARD_ERROR",
  api.createCard
);

export const getCard = asyncActionCreator(
  "GET_CARD_PENDING",
  "GET_CARD_SUCCESS",
  "GET_CARD_ERROR",
  api.getCard
);

export const getAllCards = asyncActionCreator(
  "GET_ALL_CARDS_PENDING",
  "GET_ALL_CARDS_SUCCESS",
  "GET_ALL_CARDS_ERROR",
  api.getAllCards
);

export const getCardsInDeck = asyncActionCreator(
  "GET_CARDS_IN_DECK_PENDING",
  "GET_CARDS_IN_DECK_SUCCESS",
  "GET_CARDS_IN_DECK_ERROR",
  api.getCardsInDeck
);

export const updateCard = asyncActionCreator(
  "UPDATE_CARD_PENDING",
  "UPDATE_CARD_SUCCESS",
  "UPDATE_CARD_ERROR",
  api.updateCard
);

export const deleteCard = asyncActionCreator(
  "DELETE_CARD_PENDING",
  "DELETE_CARD_SUCCESS",
  "DELETE_CARD_ERROR",
  api.deleteCard
);

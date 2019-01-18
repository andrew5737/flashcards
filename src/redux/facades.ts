import { asyncActionFacadeBuilder } from "./asyncActionFacadeBuilder";
import * as api from "../services/api";
import * as actions from "./actions";

export const initializeApi = async () =>
  asyncActionFacadeBuilder(actions.initializeApi, async () => {
    await api.initialize();
    const [decks, cards] = await Promise.all([api.getAllDecks(), api.getAllCards()]);
    return { decks, cards };
  });

export const createDeck = async (name: string) =>
  asyncActionFacadeBuilder(actions.createDeck, api.createDeck, name);

export const getDeck = async (id: number) =>
  asyncActionFacadeBuilder(actions.getDeck, api.getDeck, id);

export const getAllDecks = async () =>
  asyncActionFacadeBuilder(actions.getAllDecks, api.getAllDecks);

export const updateDeckName = async (id: number, name: string) =>
  asyncActionFacadeBuilder(actions.updateDeckName, api.updateDeckName, id, name);

export const deleteDeck = async (id: number) =>
  asyncActionFacadeBuilder(actions.deleteDeck, api.deleteDeck, id);

export const createCard = async (front: string, back: string, deck: number) =>
  asyncActionFacadeBuilder(actions.createCard, api.createCard, front, back, deck);

export const getCard = async (id: number) =>
  asyncActionFacadeBuilder(actions.getCard, api.getCard, id);

export const getAllCards = async () =>
  asyncActionFacadeBuilder(actions.getAllCards, api.getAllCards);

export const getCardsInDeck = async (deck: number) =>
  asyncActionFacadeBuilder(actions.getCardsInDeck, api.getCardsInDeck, deck);

export const updateCard = async (id: number, updates: api.CardUpdates) =>
  asyncActionFacadeBuilder(actions.updateCard, api.updateCard, id, updates);

export const deleteCard = async (id: number) =>
  asyncActionFacadeBuilder(actions.deleteCard, api.deleteCard, id);

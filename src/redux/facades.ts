import { asyncFacadeBuilder } from "./asyncFacadeBuilder";
import * as api from "../services/api";
import * as actions from "./actions";

export const initializeApi = async () =>
  asyncFacadeBuilder(actions.initializeApi, async () => {
    await api.initialize();
    const [decks, cards] = await Promise.all([
      api.getAllDecks(),
      api.getAllCards()
    ]);
    return { decks, cards };
  });

export const createDeck = async (name: string) =>
  asyncFacadeBuilder(actions.createDeck, () => api.createDeck(name));

export const getDeck = async (id: number) =>
  asyncFacadeBuilder(actions.getDeck, () => api.getDeck(id));

export const getAllDecks = async () =>
  asyncFacadeBuilder(actions.getAllDecks, () => api.getAllDecks());

export const updateDeckName = async (id: number, name: string) =>
  asyncFacadeBuilder(actions.updateDeckName, () =>
    api.updateDeckName(id, name)
  );

export const deleteDeck = async (id: number) =>
  asyncFacadeBuilder(actions.deleteDeck, () => api.deleteDeck(id));

export const createCard = async (front: string, back: string, deck: number) =>
  asyncFacadeBuilder(actions.createCard, () =>
    api.createCard(front, back, deck)
  );

export const getCard = async (id: number) =>
  asyncFacadeBuilder(actions.getCard, () => api.getCard(id));

export const getAllCards = async () =>
  asyncFacadeBuilder(actions.getAllCards, () => api.getAllCards());

export const getCardsInDeck = async (deck: number) =>
  asyncFacadeBuilder(actions.getCardsInDeck, () => api.getCardsInDeck(deck));

export const updateCard = async (id: number, updates: api.CardUpdates) =>
  asyncFacadeBuilder(actions.updateCard, () => api.updateCard(id, updates));

export const deleteCard = async (id: number) =>
  asyncFacadeBuilder(actions.deleteCard, () => api.deleteCard(id));

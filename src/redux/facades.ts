import { initializeApiAction, createDeckAction } from "./actions";
import { asyncFacadeBuilder } from "./asyncFacadeBuilder";
import * as api from "../services/api";

export const initializeApi = async () =>
  asyncFacadeBuilder(initializeApiAction, async () => {
    await api.initialize();
    const [decks, cards] = await Promise.all([
      api.getAllDecks(),
      api.getAllCards()
    ]);
    return { decks, cards };
  });

export const createDeck = async (name: string) =>
  asyncFacadeBuilder(createDeckAction, () => api.createDeck(name));

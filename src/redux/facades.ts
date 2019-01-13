import { initializeApiAction, createDeckAction } from "./actions";
import { asyncFacadeBuilder } from "./asyncFacadeBuilder";
import * as api from "../services/api";

export const initializeApi = async () =>
  asyncFacadeBuilder(initializeApiAction, async () => {
    await api.initialize();
    const [decks, cards] = await Promise.all([
      await api.getAllDecks(),
      await api.getAllCards()
    ]);
    return { decks, cards };
  });

export const createDeck = async (name: string) =>
  asyncFacadeBuilder(createDeckAction, () => api.createDeck(name));

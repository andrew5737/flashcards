import { initialize, getAllDecks, getAllCards } from "../services/api";
import { initializeApiAction, createDeckAction } from "./actions";
import { asyncFacadeBuilder } from "./asyncFacadeBuilder";

export const initializeApi = async () =>
  asyncFacadeBuilder(initializeApiAction, async () => {
    await initialize();
    const [decks, cards] = await Promise.all([
      await getAllDecks(),
      await getAllCards()
    ]);
    return { decks, cards };
  });

export const createDeck = async (name: string): Promise<void> =>
  asyncFacadeBuilder(createDeckAction, () => createDeck(name));

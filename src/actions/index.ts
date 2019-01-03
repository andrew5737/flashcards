import { initialize, getAllDecks, getAllCards } from "../services/api";

export const INITIALIZE_API = "INITIALIZE_API";
export const initializeApi = async () => {
  await initialize();
  const decks = await getAllDecks();
  const cards = await getAllCards();
  return {
    type: INITIALIZE_API,
    decks,
    cards
  };
};

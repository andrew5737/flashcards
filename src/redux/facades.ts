import { initialize, getAllDecks, getAllCards } from "../services/api";
import { dispatch } from "./store";
import { initializeApiAction, createDeckAction } from "./actions";

const asyncFacadeBuilder = async (asyncAction: any, asyncFunc: any) => {
  dispatch(asyncAction.request());
  try {
    const resp = await asyncFunc();
    dispatch(asyncAction.success(resp));
  } catch (e) {
    dispatch(asyncAction.failure(e));
  }
};

export const initializeApi = async () =>
  asyncFacadeBuilder(initializeApiAction, async () => {
    await initialize();
    const [decks, cards] = await Promise.all([
      await getAllDecks(),
      await getAllCards()
    ]);
    return { decks, cards };
  });

export const createDeck = async (name: string) =>
  asyncFacadeBuilder(createDeckAction, () => createDeck(name));

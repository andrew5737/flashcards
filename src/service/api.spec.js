import {
  createDeck,
  getDeck,
  getAllDecks,
  updateDeckName,
  deleteDeck,
  createCard,
  getCard,
  getCardsInDeck,
  updateCard,
  deleteCard
} from "./api";

describe("api", () => {
  describe("createDeck", () => {
    it("creates a deck then calls getAllDecks to test the operation performed correctly", async () => {
      const deckName = "deckName";
      await createDeck(deckName);
      const decks = await getAllDecks();

      expect(decks[0].name).toEqual(deckName);
    });
  });

  describe("getDeck", () => {
    it("creates deck then retrieves it", async () => {
      const deck = await createDeck("deckName");
      const result = await getDeck(deck.id);

      expect(result).toEqual(deck);
    });
  });

  describe("updateDeckName", () => {
    it("creates deck then updates it's name", async () => {
      const deck = await createDeck("deckName");
      const updatedDeckName = "updatedDeckName";
      const updatedDeck = await updateDeckName(deck.id, updatedDeckName);

      expect(updatedDeck.name).toEqual(updatedDeckName);
    });
  });
});

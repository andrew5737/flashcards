let api = require("./api");

afterEach(() => {
  jest.resetModules();
  api = require("./api");
});

describe("api", () => {
  describe("createDeck", () => {
    it("creates a deck then calls getAllDecks to test the operation performed correctly", async () => {
      const deckName = "deckName";
      await api.createDeck(deckName);
      const decks = await api.getAllDecks();

      expect(decks[0].name).toEqual(deckName);
    });
  });

  describe("getDeck", () => {
    it("creates deck then retrieves it", async () => {
      const deck = await api.createDeck("deckName");
      const result = await api.getDeck(deck.id);

      expect(result).toEqual(deck);
    });
  });

  describe("getAllDecks", () => {
    it("creates 3 decks and gets them all", async () => {
      await Promise.all([
        api.createDeck("1"),
        api.createDeck("2"),
        api.createDeck("3")
      ]);

      const decks = await api.getAllDecks();
      expect(decks.length).toEqual(3);
    });
  });

  describe("updateDeckName", () => {
    it("creates deck then updates it's name", async () => {
      const deck = await api.createDeck("deckName");
      const updatedDeckName = "updatedDeckName";
      const updatedDeck = await api.updateDeckName(deck.id, updatedDeckName);
      expect(updatedDeck!.name).toBe(updatedDeckName);
    });
  });

  describe("deleteDeck", () => {
    it("creates deck, then deletes it", async () => {
      const deck = await api.createDeck("deckName");
      await api.deleteDeck(deck.id);
      const decks = await api.getAllDecks();
      expect(decks.length).toBe(0);
    });
  });

  describe("createCard", () => {
    it("creates a card", async () => {
      const deck = await api.createDeck("deckName");
      const card = await api.createCard("front", "back", deck.id);

      const cards = await api.getAllCards();
      expect(cards[0]).toEqual(card);
    });
  });

  describe("getCard", () => {
    it("creates a card and retrieves it from api", async () => {
      const deck = await api.createDeck("deckName");
      const card = await api.createCard("front", "back", deck.id);

      const cardFromAPI = await api.getCard(card.id);
      expect(cardFromAPI).toBe(card);
    });
  });

  describe("getCard", () => {
    it("creates a card and retrieves it from api", async () => {
      const deck1 = await api.createDeck("deck1");
      const card = await api.createCard("front", "back", deck1.id);
      const deck2 = await api.createDeck("deck1");
      await api.createCard("front", "back", deck2.id);

      const cards = await api.getCardsInDeck(deck1.id);
      expect(cards.length).toBe(1);
      expect(cards[0]).toBe(card);
    });
  });

  describe("getAllCard", () => {
    it("creates cards and retrieves them", async () => {
      const deck1 = await api.createDeck("deck1");
      await api.createCard("front", "back", deck1.id);
      const deck2 = await api.createDeck("deck1");
      await api.createCard("front", "back", deck2.id);

      const cards = await api.getAllCards();
      expect(cards.length).toBe(2);
    });
  });

  describe("deleteDeck", () => {
    it("deletes deck with cards", async () => {
      const deckName = "deckName";
      const deck = await api.createDeck(deckName);
      await api.createCard("front", "back", deck.id);
      await api.createCard("front", "back", deck.id);

      await api.deleteDeck(deck.id);

      const decks = await api.getAllDecks();
      const cards = await api.getAllCards();
      expect(decks.length).toBe(0);
      expect(cards.length).toBe(0);
    });
  });

  describe("getAllCard", () => {
    it("creates cards and retrieves them", async () => {
      const deck1 = await api.createDeck("deck1");
      const card = await api.createCard("front", "back", deck1.id);

      const deck2 = await api.createDeck("deck2");
      const newFront = "newFront";
      const newBack = "back";
      await api.updateCard(card.id, {
        front: newFront,
        back: newBack,
        deck: deck2.id
      });

      const updatedCard = await api.getCard(card.id);
      expect(updatedCard!.front).toEqual(newFront);
      expect(updatedCard!.back).toEqual(newBack);
      expect(updatedCard!.deck).toEqual(deck2.id);
    });
  });

  describe("deleteCard", () => {
    it("creates card then deletes it", async () => {
      const deck1 = await api.createDeck("deck1");
      const card = await api.createCard("front", "back", deck1.id);

      await api.deleteCard(card.id);

      const cards = await api.getAllCards();
      expect(cards.length).toEqual(0);
    });
  });
});

// Use an empty export to please Babel's single file emit.
// https://github.com/Microsoft/TypeScript/issues/15230
export {};

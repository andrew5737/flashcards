let nextDeckId = 0;
let nextCardId = 0;

class Deck {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Card {
  constructor(id, front, back, deckId) {
    this.id = id;
    this.front = front;
    this.back = back;
    this.deckId = deckId;
  }
}

const decks = [];
const cards = [];

export const createDeck = async name => {
  const deck = new Deck(nextDeckId++, name);
  decks.push(deck);
  return deck;
};

export const getDeck = async id => decks.find(deck => deck.id === id);

export const getAllDecks = async () => decks;

export const updateDeckName = async (id, name) => {
  const deck = getDeck(id);
  deck.name = name;
  return deck;
};

export const deleteDeck = async id => {
  decks.filter(deck => deck.id !== id);
  cards.filter(card => card.deckId !== id);
};

export const createCard = async (front, back, deck) =>
  new Card(nextCardId++, front, back, deck);

export const getCard = async id => cards.find(card => card.id === id);

export const getCardsInDeck = async deckId =>
  cards.filter(card => card.deckId === deckId);

export const updateCard = async (id, updates) => {
  const card = getCard(id);

  if (!card) return;

  const { front, back, deck } = updates;
  if (front) card.front = front;
  if (back) card.back = back;
  if (deck) card.deck = deck;
};

export const deleteCard = async id => {
  cards.filter(card => card.id !== id);
};

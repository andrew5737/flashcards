let nextDeck = 0;
let nextCardId = 0;

class Deck {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Card {
  public id: number;
  public front: string;
  public back: string;
  public deck: number;
  constructor(id: number, front: string, back: string, deck: number) {
    this.id = id;
    this.front = front;
    this.back = back;
    this.deck = deck;
  }
}

let decks: Deck[] = [];
let cards: Card[] = [];

export const createDeck = async (name: string) => {
  const deck = new Deck(nextDeck++, name);
  decks.push(deck);
  return deck;
};

export const getDeck = async (id: number) => decks.find(deck => deck.id === id);

export const getAllDecks = async () => decks;

export const updateDeckName = async (id: number, name: string) => {
  const deck = await getDeck(id);
  if (!deck) return undefined;
  deck.name = name;
  return deck;
};

export const deleteDeck = async (id: number) => {
  decks = decks.filter(deck => deck.id !== id);
  cards = cards.filter(card => card.deck !== id);
};

export const createCard = async (front: string, back: string, deck: number) => {
  const card = new Card(nextCardId++, front, back, deck);
  cards.push(card);
  return card;
};

export const getCard = async (id: number) => cards.find(card => card.id === id);

export const getAllCards = async () => cards;

export const getCardsInDeck = async (deck: number) =>
  cards.filter(card => card.deck === deck);

type cardUpdates = { front?: string; back?: string; deck?: number };
export const updateCard = async (id: number, updates: cardUpdates) => {
  const card = await getCard(id);

  if (!card) return;

  const { front, back, deck } = updates;
  if (front) card.front = front;
  if (back) card.back = back;
  if (deck) card.deck = deck;
};

export const deleteCard = async (id: number) => {
  cards = cards.filter(card => card.id !== id);
};

import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";

let nextDeck = 0;
let nextCardId = 0;

let decks: Deck[] = [];
let cards: Card[] = [];

export const initialize = async () => {
  const deckCount = 12;
  const cardCount = 20;

  for (let i = 0; i < deckCount; i++) {
    const deck = await createDeck("Deck" + (nextDeck + 1));
    for (let i = 0; i < cardCount; i++) {
      await createCard("front" + i, "back" + 1, deck.id);
    }
  }
};

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

export const getCardsInDeck = async (deck: number) => cards.filter(card => card.deck === deck);

export type CardUpdates = { front?: string; back?: string; deck?: number };
export const updateCard = async (id: number, updates: CardUpdates) => {
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

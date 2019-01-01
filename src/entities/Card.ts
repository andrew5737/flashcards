export class Card {
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

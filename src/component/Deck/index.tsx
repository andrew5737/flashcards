import React, { Component } from "react";
import { Card } from "../../entities/Card";
import { DeckCard } from "../DeckCard";

export interface DeckProps {
  id: number;
  name: string;
  cards: Card[];
}

export class Deck extends Component<DeckProps, {}> {
  render = () => {
    const cards = this.props.cards.map(card => (
      <DeckCard key={card.id} front={card.front} back={card.back} />
    ));
    return (
      <div className="deck">
        <div className="deck--name">{this.props.name}</div>
        <div className="deck--cards">{cards}</div>
      </div>
    );
  };
}

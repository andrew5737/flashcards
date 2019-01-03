import React, { Component } from "react";
import { Card } from "../../entities/Card";
import { DeckCard } from "../DeckCard";
import "./Deck.scss";

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
        <h1 className="deck--name">{this.props.name}</h1>
        <div className="deck--cards">{cards}</div>
      </div>
    );
  };
}

import React, { Component } from "react";
import { Card } from "../../entities/Card";

export interface DeckProps {
  name: string;
  cards: Card[];
}

export class Deck extends Component<DeckProps, {}> {
  render = () => {
    return (
      <div className="deck">
        <div className="deck--name">{this.props.name}</div>
      </div>
    );
  };
}

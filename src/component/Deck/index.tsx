import React, { Component } from "react";
import "./Deck.scss";

export interface DeckProps {
  onDeckSelected?: (id: number) => void;
  id: number;
  name: string;
}

export class Deck extends Component<DeckProps, {}> {
  onDeckSelected = () => {
    if (this.props.onDeckSelected) this.props.onDeckSelected(this.props.id);
  };

  render = () => {
    return (
      <div className="deck" onClick={this.onDeckSelected}>
        <div className="deck--name">{this.props.name}</div>
      </div>
    );
  };
}

import React, { Component } from "react";
import { Deck } from "../Deck";
import "./DeckList.scss";

export interface DeckListProps {
  decks: any[];
}

export class DeckList extends Component<DeckListProps, {}> {
  static defaultProps = {
    decks: []
  };

  render() {
    const decks = this.props.decks.map((deck, index) => (
      <Deck key={index} id={index} name={deck.name} />
    ));
    return <div className="deck-list">{decks}</div>;
  }
}

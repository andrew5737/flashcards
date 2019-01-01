import React, { Component } from "react";
import { DeckThumbnail } from "../DeckThumbnail";
import { Deck } from "../../entities/Deck";
import "./DeckList.scss";

export interface DeckListProps {
  decks: Deck[];
}

export class DeckList extends Component<DeckListProps, {}> {
  static defaultProps = {
    decks: []
  };

  render() {
    const decks = this.props.decks.map((deck, index) => (
      <DeckThumbnail key={index} id={index} name={deck.name} />
    ));
    return <div className="deck-list">{decks}</div>;
  }
}

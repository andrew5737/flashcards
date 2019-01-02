import React, { Component } from "react";
import { DeckListThumbnail } from "../DeckListThumbnail";
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
      <DeckListThumbnail key={index} id={index} name={deck.name} />
    ));
    return <div className="deck-list">{decks}</div>;
  }
}

import React, { Component } from "react";
import { Deck } from "../Deck";
import "./DeckList.css";

export class DeckList extends Component {
  render() {
    const decks = this.props.decks.map((deck, index) => <Deck key={index} name={deck.name} />);
    return (
      <div className="deck-list">
        {decks}
      </div>
    );
  }
}

DeckList.defaultProps = {
  decks: [],
};
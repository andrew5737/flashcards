import React, { Component } from "react";

export interface CreateDeckProps {
  createDeck: (deckName: string) => void;
  errorMessage: string;
}

interface CreateDeckState {
  deckName: string;
}

export class CreateDeck extends Component<CreateDeckProps, CreateDeckState> {
  state = { deckName: "" };

  createDeck = () => this.props.createDeck(this.state.deckName);

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ deckName: event.target.value });

  render = () => {
    return (
      <div>
        <span>Creat Deck: </span>
        <input
          type="text"
          placeholder="deck name"
          onChange={this.handleChange}
          value={this.state.deckName}
        />
        <span onClick={this.createDeck}>➕</span>
        <span className="error">{this.props.errorMessage}</span>
      </div>
    );
  };
}

import React, { Component } from "react";
import "./DeckCard.scss";

interface DeckCardState {
  flipped: boolean;
}

export interface DeckCardProps {
  front: string;
  back: string;
}

export class DeckCard extends Component<DeckCardProps, DeckCardState> {
  constructor(props: DeckCardProps) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render = () => {
    const { front, back } = this.props;
    const cardText = this.state.flipped ? back : front;
    return (
      <div className="card">
        <div className="card--text">{cardText}</div>
        <button onClick={this.flip}>flip</button>
      </div>
    );
  };
}

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
  static readonly backgroundColors = {
    front: "#d6d6f6",
    back: "#d6f6f6"
  };

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
    const backgroundColor = this.state.flipped
      ? DeckCard.backgroundColors.back
      : DeckCard.backgroundColors.front;
    return (
      <div className="card" style={{ backgroundColor }}>
        <div className="card--text">{cardText}</div>
        <div className="card--flip-button" onClick={this.flip}>
          🔄
        </div>
      </div>
    );
  };
}

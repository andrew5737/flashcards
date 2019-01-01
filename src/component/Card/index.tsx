import React, { Component } from "react";
import "./Card.scss";

interface CardState {
  flipped: boolean;
}

export interface CardProps {
  front: string;
  back: string;
}

export class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
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

import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }

  render = () => {
    const { front, back } = this.props;
    const cardText = this.state.flipped ? back : front;
    return (
      <div className="card">
        <div className="card--text">{cardText}</div>
        <button onClick={this.flip}>flip</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Deck.css";

export class Deck extends Component {
  onDeckSelected = () => {
    this.props.onDeckSelected(this.props.id);
  }

  render = () => {
    return (
      <div className="deck" onClick={this.onDeckSelected}>
        <div className="deck--name">{this.props.name}</div>
      </div>
    );
  }
}

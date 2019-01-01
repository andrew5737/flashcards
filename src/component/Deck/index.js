import React, { Component } from "react";
import "./Deck.css";

export class Deck extends Component {
  render() {
    return <div className="deck--name">{this.props.name}</div>;
  }
}

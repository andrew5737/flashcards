import React, { Component } from "react";
import { connect } from "react-redux";
import { DeckList } from "../components/DeckList";
import { Deck } from "../entities/Deck";

export interface DeckListContainerProps {
  decks?: Deck[];
}

class DeckListContainer extends Component<DeckListContainerProps, {}> {
  static readonly defaultProps = {
    decks: []
  };

  render = () => {
    return <DeckList decks={this.props.decks} />;
  };
}

const mapStateToProps = (state: any) => {
  return {
    decks: state.decks
  };
};

export default connect(mapStateToProps)(DeckListContainer);

import React, { Component } from "react";
import { DeckProps, Deck } from "../components/Deck";
import { connect } from "react-redux";
import { ApplicationState } from "../redux/reducer";
import { RouteComponentProps } from "react-router";

interface DeckContainerProps
  extends DeckProps,
    RouteComponentProps<{ id: string }> {}

class DeckContainer extends Component<DeckContainerProps, {}> {
  render = () => {
    const { id, name, cards } = this.props;
    return <Deck id={id} name={name} cards={cards} />;
  };
}

const mapStateToProps = (
  state: ApplicationState,
  ownProps: DeckContainerProps
) => {
  const id = parseInt(ownProps.match.params.id);
  const deck = state.decks.filter(deck => deck.id === id);
  const name = deck.length > 0 ? deck[0].name : "No Deck Found";
  const cards = state.cards.filter(card => card.deck === id);
  return { id, name, cards };
};

export default connect(mapStateToProps)(DeckContainer);

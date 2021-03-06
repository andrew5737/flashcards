import React, { Component } from "react";
import { Deck as DeckComponent } from "../components/Deck";
import { connect } from "react-redux";
import { ApplicationState } from "../redux/reducer";
import { RouteComponentProps } from "react-router";
import { Deck } from "../entities/Deck";
import { Page404 } from "../components/Page404";
import { Card } from "../entities/Card";
import { Link } from "react-router-dom";

interface DeckContainerProps extends RouteComponentProps<{ id: string }> {
  deck?: Deck;
  cards: Card[];
}

class DeckContainer extends Component<DeckContainerProps, {}> {
  render = () => {
    const { deck, cards } = this.props;
    if (deck) {
      const { id, name } = deck;
      return (
        <div>
          <Link to="/">Back</Link>
          <DeckComponent id={id} name={name} cards={cards} />
        </div>
      );
    } else {
      return <Page404 />;
    }
  };
}

const mapStateToProps = (state: ApplicationState, ownProps: DeckContainerProps) => {
  const id = parseInt(ownProps.match.params.id);
  const deck = state.decks.find(deck => deck.id === id);
  const cards = deck ? state.cards.filter(card => card.deck === id) : [];
  return { deck, cards };
};

export default connect(mapStateToProps)(DeckContainer);

import React, { Component } from "react";
import {
  DeckListThumbnail,
  DeckListThumbnailProps
} from "../components/DeckListThumbnail";
import { selectDeck } from "../redux/facades";

class DeckListThumbnailContainer extends Component<DeckListThumbnailProps, {}> {
  render = () => {
    return (
      <DeckListThumbnail
        id={this.props.id}
        name={this.props.name}
        select={selectDeck}
      />
    );
  };
}

export default DeckListThumbnailContainer;

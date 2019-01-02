import React, { Component } from "react";
import "./DeckListThumbnail.scss";

export interface DeckListThumbnailProps {
  onDeckSelected?: (id: number) => void;
  id: number;
  name: string;
}

export class DeckListThumbnail extends Component<DeckListThumbnailProps, {}> {
  onDeckSelected = () => {
    if (this.props.onDeckSelected) this.props.onDeckSelected(this.props.id);
  };

  render = () => {
    return (
      <div className="deck-thumbnail" onClick={this.onDeckSelected}>
        <div className="deck-thumbnail--name">{this.props.name}</div>
      </div>
    );
  };
}

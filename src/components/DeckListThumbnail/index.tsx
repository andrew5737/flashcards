import React, { Component } from "react";
import "./DeckListThumbnail.scss";

export interface DeckListThumbnailProps {
  select?: (id: number) => void;
  id: number;
  name: string;
}

export class DeckListThumbnail extends Component<DeckListThumbnailProps, {}> {
  select = () => {
    if (this.props.select) this.props.select(this.props.id);
  };

  render = () => {
    return (
      <div className="deck-thumbnail" onClick={this.select}>
        <div className="deck-thumbnail--name">{this.props.name}</div>
      </div>
    );
  };
}

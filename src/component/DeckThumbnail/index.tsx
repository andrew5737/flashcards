import React, { Component } from "react";
import "./DeckThumbnail.scss";

export interface DeckThumbnailProps {
  onDeckSelected?: (id: number) => void;
  id: number;
  name: string;
}

export class DeckThumbnail extends Component<DeckThumbnailProps, {}> {
  onDeckSelected = () => {
    if (this.props.onDeckSelected) this.props.onDeckSelected(this.props.id);
  };

  render = () => {
    return (
      <div className="deck" onClick={this.onDeckSelected}>
        <div className="deck--name">{this.props.name}</div>
      </div>
    );
  };
}

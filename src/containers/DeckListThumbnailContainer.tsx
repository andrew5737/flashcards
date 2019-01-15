import React, { Component } from "react";
import { DeckListThumbnail, DeckListThumbnailProps } from "../components/DeckListThumbnail";
import { History } from "history";
import { withRouter, RouteComponentProps } from "react-router";

export interface DeckListThumbnailContainerProps
  extends DeckListThumbnailProps,
    RouteComponentProps {
  history: History;
}

class DeckListThumbnailContainer extends Component<DeckListThumbnailContainerProps, {}> {
  render = () => {
    const { id, name, history } = this.props;
    return <DeckListThumbnail id={id} name={name} select={() => history.push(`/deck/${id}`)} />;
  };
}

export default withRouter(DeckListThumbnailContainer);

import React, { Component } from "react";
import "./Modal.scss";

export interface ModalProps {
  show: boolean;
  close: () => void;
}

export default class Modal extends Component<ModalProps, {}> {
  onClickModal = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === this.refs.modal) this.props.close();
  };

  render = () => {
    if (!this.props.show) return null;
    return (
      <div ref="modal" className="modal" onClick={this.onClickModal}>
        <div className="modal-content">
          <div className="modal-close" onClick={this.props.close}>
            ❌
          </div>
          <div className="modal-body">{this.props.children}</div>
        </div>
      </div>
    );
  };
}

import React, { Component } from "react";
import "./Page404.scss";
import { Link } from "react-router-dom";

export class Page404 extends Component {
  render = () => (
    <div className="Page404">
      <h1>404 Error</h1>
      <p>Page Not Found</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

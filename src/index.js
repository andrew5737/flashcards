import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./component/Hello";
import * as serviceWorker from "./serviceworker/serviceWorker";
import "./global.css";

ReactDOM.render(<Hello />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

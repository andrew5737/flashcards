import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./stores";
import DeckListContainer from "./containers/DeckListContainer";
import * as serviceWorker from "./serviceworker/serviceWorker";
import { initialize } from "./services/api";
import "./global.css";

(async () => {
  await initialize();

  render(
    <Provider store={store}>
      <DeckListContainer />
    </Provider>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
})();

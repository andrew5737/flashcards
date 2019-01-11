import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import DeckListContainer from "./containers/DeckListContainer";
import * as serviceWorker from "./serviceworker/serviceWorker";
import DeckContainer from "./containers/DeckContainer";
import { initializeApi } from "./redux/facades";
import "./global.css";
import { Page404 } from "./components/Page404";

(async () => {
  await initializeApi();
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={DeckListContainer} />
          <Route path="/deck/:id" component={DeckContainer} />
          <Route component={Page404} />
        </Switch>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
})();

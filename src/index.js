import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Import store and Provider
// Wrap App with the Provider
// Set a property of store with the invocation of our exported store
import store from "./store";
import { Provider } from "react-redux";

// Import BrowserRouter as Router and Switch
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store()}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

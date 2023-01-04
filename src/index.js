import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import thingReducer from "./things.reducer";
import { Provider } from "react-redux";
import App from "./App";

import "./styles.css";

const defaultThings = [{ id: 1, name: "thing 1" }, { id: 2, name: "thing 2" }];
const store = createStore(thingReducer, defaultThings);
// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

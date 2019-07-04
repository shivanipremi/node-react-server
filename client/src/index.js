import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import "materialize-css/dist/css/materialize.css";
import App from "./components/App";
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

console.log("store is=====", store);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("stripe key is===", process.env.REACT_APP_STRIPE_KEY);
console.log("environmet is==", process.env.NODE_ENV);

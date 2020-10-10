import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

const feelingReducer = (state = 0, action) => {
  return state;
};

const understandingReducer = (state = 0, action) => {
  return state;
};

const supportedReducer = (state = 0, action) => {
  return state;
};

const commentsReducer = (state = "", action) => {
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feeling: feelingReducer,
    understanding: understandingReducer,
    supported: supportedReducer,
    comments: commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

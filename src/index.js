import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

//TODO: modify reducers with action types to record state
const feelingReducer = (state = 1, action) => {
  if (action.type === "UPDATE_FEELINGS") {
    return action.payload;
  } else if (action.type === "RESET_STORE") {
    return 1;
  }
  return state;
};

const understandingReducer = (state = 1, action) => {
  if (action.type === "UPDATE_UNDERSTANDING") {
    return action.payload;
  } else if (action.type === "RESET_STORE") {
    return 1;
  }
  return state;
};

const supportedReducer = (state = 1, action) => {
  if (action.type === "UPDATE_SUPPORTED") {
    return action.payload;
  } else if (action.type === "RESET_STORE") {
    return 1;
  }
  return state;
};

const commentsReducer = (state = "", action) => {
  if (action.type === "UPDATE_COMMENTS") {
    return action.payload;
  } else if (action.type === "RESET_STORE") {
    return "";
  }
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

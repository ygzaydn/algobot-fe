import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import logger from "redux-logger";

const middleWares = [];

if (process.env.NODE_ENV !== "production") {
  middleWares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;

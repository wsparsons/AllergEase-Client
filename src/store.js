import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

export default (initialState) => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware, logger ));
};

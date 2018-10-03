import auth from "./auth.reducers";
import search from "./search";
import allergens from "./allergens";


import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({ auth, search, allergens });

export default rootReducer;

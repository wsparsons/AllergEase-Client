import auth from "./auth.reducers";
import search from "./search.reducers";
import allergens from "./allergens.reducers";
import userAllergens from "./userAllergens.reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({ auth, search, allergens, userAllergens });

export default rootReducer;

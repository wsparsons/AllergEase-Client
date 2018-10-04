import auth from "./auth.reducers";
import search from "./search";
import allergens from "./allergens.reducer";
import userAllergens from "./userAllergens.reducer";

import { combineReducers } from "redux";


const rootReducer = combineReducers({ auth, search, allergens, userAllergens });

export default rootReducer;

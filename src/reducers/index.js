import auth from "./auth.reducers";
import search from "./search";

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({ auth, search });

// const rootReducer = combineReducers({ auth, form: formReducer })

export default rootReducer;

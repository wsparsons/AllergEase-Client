import auth from "./auth.reducers";
// import allergens from './allergens'
import { combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({ auth });

// const rootReducer = combineReducers({ allergens })

export default rootReducer;

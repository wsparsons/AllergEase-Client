import { GET_ALL_ALLERGENS, GET_USER_ALLERGENS } from "../actions/allergens";

let initialState = {
  allAllergens: [],
  userAllergens: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ALLERGENS:
      return { ...state, allAllergens: action.payload };
    case GET_USER_ALLERGENS:
      return { ...state, userAllergens: action.payload };
    default:
      return state;
  }
};

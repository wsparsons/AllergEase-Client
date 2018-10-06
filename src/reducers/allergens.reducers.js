import { GET_ALL_ALLERGENS } from "../actions/allergens.actions";

let initialState = {
  allAllergens: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ALLERGENS:
      return { ...state, allAllergens: action.payload };
    default:
      return state;
  }
};

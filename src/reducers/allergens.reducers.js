import { GET_ALL_ALLERGENS , GET_ONE_ALLERGEN} from "../actions/allergens.actions";

let initialState = {
  allAllergens: [],
  oneAllergen: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ALLERGENS:
      return { ...state, allAllergens: action.payload };
    case GET_ONE_ALLERGEN:
      return { ...state, oneAllergen: action.payload };

    default:
      return state;
  }
};

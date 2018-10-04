import { GET_USER_ALLERGENS } from "../actions/userAllergens.actions";

let initialState = {
  userAllergens: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ALLERGENS:
      return { ...state, userAllergens: action.payload };
    default:
      return state;
  }
};

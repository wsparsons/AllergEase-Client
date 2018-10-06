import allergensModel from "../models/allergens.models";

export const GET_ALL_ALLERGENS = "GET_ALL_ALLERGENS";
export const GET_ONE_ALLERGEN = "GET_ONE_ALLERGEN";

export const getAllAllergens = () => {
  return async dispatch => {
    const response = await allergensModel.getAllAllergens();

    dispatch({
      type: GET_ALL_ALLERGENS,
      payload: response
    });
  };
};

export const getOneAllergen = id => {
  return async dispatch => {
    const response = await allergensModel.getOneAllergen(id);

    dispatch({
      type: GET_ONE_ALLERGEN,
      payload: response
    });
  };
};

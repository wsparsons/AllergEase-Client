import allergensModel from "../models/allergens.models";

export const GET_ALL_ALLERGENS = "GET_ALL_ALLERGENS";

export const getAllAllergensAliases = () => {
  return async dispatch => {
    const response = await allergensModel.getAllAllergensAliases();

    dispatch({
      type: GET_ALL_ALLERGENS,
      payload: response
    });
  };
};

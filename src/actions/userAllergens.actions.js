import userAllergensModel from "../models/userAllergens.models";

export const GET_USER_ALLERGENS = "GET_USER_ALLERGENS";

export const getUserAllergens = userId => {
  return async dispatch => {
    const response = await userAllergensModel.getUserAllergens(userId);

    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response.response
    });
  };
};

export const addUserAllergen = (userId, userAllergenId) => {
  return async dispatch => {
    await userAllergensModel.addUserAllergen(userId, userAllergenId);

    const response = await userAllergensModel.getUserAllergens(userId);

    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response.response
    });
  };
};

export const removeUserAllergen = (userId, userAllergenId) => {
  return async dispatch => {
    await userAllergensModel.removeUserAllergen(
      userId,
      userAllergenId
    );

    const response = await userAllergensModel.getUserAllergens(userId);

    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response.response
    });
  };
};

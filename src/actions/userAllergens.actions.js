import userAllergensModel from "../models/userAllergens.models";

export const GET_USER_ALLERGENS = "GET_USER_ALLERGENS";

export const getAllUserAllergens = userId => {
  return async dispatch => {
    const response = await userAllergensModel.getAllUserAllergens(userId);

    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response.response
    });
  };
};

export const createUserAllergen = (userId, userAllergenId) => {
  return async dispatch => {
    await userAllergensModel.createUserAllergen(userId, userAllergenId);

    const response = await userAllergensModel.getAllUserAllergens(userId);

    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response.response
    });
  };
};

export const deleteUserAllergen = (userId, userAllergenListId) => {
  return async dispatch => {
    await userAllergensModel.deleteUserAllergen(
      userId,
      userAllergenListId
    );

    const response = await userAllergensModel.getAllUserAllergens(userId);

    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response.response
    });
  };
};

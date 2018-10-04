import allergensModel from '../models/allergens.model'

export const GET_ALL_ALLERGENS = 'GET_ALL_ALLERGENS'

export const getAllAllergens = () => {
  return async dispatch => {
    const response = await allergensModel.getAllAllergens()
    dispatch({
      type: GET_ALL_ALLERGENS,
      payload: response
    })
  }
}


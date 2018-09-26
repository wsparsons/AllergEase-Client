import allergensModel from '../models/allergens'

export const GET_ALL_ALLERGENS = 'GET_ALL_ALLERGENS'

export const getAllAllergens = () => {
  return async dispatch => {
    const payload = await allergensModel.getAllAllergens()
    dispatch({
      type: GET_ALL_ALLERGENS,
      payload
    })
  }
}
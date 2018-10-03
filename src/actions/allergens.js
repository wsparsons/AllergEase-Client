import allergensModel from '../models/allergens'

export const GET_ALL_ALLERGENS = 'GET_ALL_ALLERGENS'
export const GET_USER_ALLERGENS = 'GET_USER_ALLERGENS'

export const getAllAllergens = () => {
  return async dispatch => {
    const response = await allergensModel.getAllAllergens()
    dispatch({
      type: GET_ALL_ALLERGENS,
      payload: response
    })
  }
}

export const getUserAllergens = (id) => {
  return async dispatch => {
    console.log('IDDD', id)
    const response = await allergensModel.getUserAllergens(id)


    dispatch({
      type: GET_USER_ALLERGENS,
      payload: response
    })
  }
}
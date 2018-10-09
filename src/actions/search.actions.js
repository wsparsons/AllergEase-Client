import searchModel from "../models/search.models";

export const POST_SEARCH_PENDING = "POST_SEARCH_PENDING";
export const POST_SEARCH_SUCCESS = "POST_SEARCH_SUCCESS";
export const POST_SEARCH_FAILED = "POST_SEARCH_FAILED";
export const POST_SEARCH_CLEAR = "POST_SEARCH_CLEAR";

export const searchBarcode = (userId, barcode) => {
  return async dispatch => {
    try {
      dispatch({ type: POST_SEARCH_PENDING });
      let response = await searchModel.search(userId, barcode);

      if (response.status === 201) {
        dispatch({
          type: POST_SEARCH_SUCCESS,
          payload: response.data.response
        });
      } else {
        dispatch({ type: POST_SEARCH_FAILED, payload: response.data });
      }
    } catch (err) {
      console.log(err);

      dispatch({ type: POST_SEARCH_FAILED, payload: err });
    }
  };
};

export const searchClear = () => {
  return { type: POST_SEARCH_CLEAR }
}

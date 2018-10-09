import {
  POST_SEARCH_PENDING,
  POST_SEARCH_SUCCESS,
  POST_SEARCH_FAILED,
  POST_SEARCH_CLEAR
} from "../actions/search.actions";

let initialState = {
  searchResult: {
    valence: "",
    product: {}
  },
  displayProduct: false,
  showSearchError: false,
  searchLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SEARCH_PENDING:
      return {
        ...state,
        searchLoading: true,
        showSearchError: false,
        searchResult: {}
      };
    case POST_SEARCH_SUCCESS:
      return {
        ...state,
        displayProduct: true,
        searchLoading: false,
        showSearchError: false,
        searchResult: action.payload
      };
    case POST_SEARCH_FAILED:
      return {
        ...state,
        searchLoading: false,
        showSearchError: true,
        searchResult: {}
      };
    case POST_SEARCH_CLEAR:
      return {
        ...state,
        displayProduct: false,
        showSearchError: false,
        searchResult: {},
        searchLoading: false
      };
    default:
      return state;
  }
};

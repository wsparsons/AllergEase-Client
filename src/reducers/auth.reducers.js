import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  // USER_SIGNUP_PENDING,
  // USER_SIGNUP_SUCCESS,
  // USER_SIGNUP_FAILED,
  // USER_LOGOUT,
  USER_VERIFY
} from "../actions/auth.actions";

let initialState = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
  showLoginError: false,
  showSignupError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, isLoading: false, user: action.payload };
    case USER_LOGIN_FAILED:
      return { ...state, isLoading: false, showLoginError: true };
    // case USER_SIGNUP_PENDING:
    //   return { ...state, isLoading: true };
    // case USER_SIGNUP_SUCCESS:
    //   return { ...state, isLoggedIn: true, isLoading: false };
    // case USER_SIGNUP_FAILED:
    //   return { ...state, isLoading: false, showSignupError: true };
    // case USER_LOGOUT:
    //   return { ...state, user: {} };
    case USER_VERIFY: 
      return { ...state, isLoggedIn: true, user: action.payload}

    default:
      return state;
  }
};

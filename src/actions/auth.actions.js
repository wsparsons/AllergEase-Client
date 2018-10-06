import authModel from "../models/auth.models";

export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_SIGNUP_PENDING = "USER_SIGNUP_PENDING";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_VERIFY = "USER_VERIFY";

export const userLogin = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: USER_LOGIN_PENDING });

      let response = await authModel.login(email, password);
      let token = response.data.token;

      localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, token);

      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.user });
    } catch (err) {
      dispatch({ type: USER_LOGIN_FAILED, payload: err });
    }
  };
};

export const userSignUp = ({ first_name, last_name, email, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: USER_SIGNUP_PENDING });

      let response = await authModel.signup(
        first_name,
        last_name,
        email,
        password
      );
      console.log(response);
      let token = response.data.token;

      localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, token);

      dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data.user });
    } catch (err) {
      dispatch({ type: USER_SIGNUP_FAILED, payload: err });
    }
  };
};

export const verify = () => {
  return async dispatch => {
    const response = await authModel.verify();
    if (response.user) {
      dispatch({ type: USER_VERIFY, payload: response.user });
    }
  };
};

export const userLogout = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME);
  return async dispatch => {
    dispatch({ type: USER_LOGOUT });
  };
};

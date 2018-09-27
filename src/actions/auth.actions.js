import axios from "axios";

export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_SIGNUP_PENDING = "USER_SIGNUP_PENDING";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch({ type: USER_LOGIN_PENDING });
      
      let response = await axios.post(`${process.env.BASE_URL}/login`, {email, password});
      let token = response.data.token

      localStorage.setItem(process.env.TOKEN_NAME, token)
      
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response })

    } catch (err) {
      dispatch({ type: USER_LOGIN_FAILED, payload: err });
    }
  };
};

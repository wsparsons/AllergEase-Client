import axios from "axios";
const BASE_URL= `https://allergease.herokuapp.com`


const login = async (email, password) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/login`,
    { email, password }
  );

  return response;
};

const signup = async (first_name, last_name, email, password) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/signup`,
    { first_name, last_name, email, password }
  );

  return response;
};

const verify = async () => {
  let token = localStorage.getItem("AllergEase Token");
  if (!token) return false;
  
  try {
    const response = await axios(
      `${BASE_URL}/api/users/verify`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (err) {
    return false;
  }
};

export default { login, signup, verify };

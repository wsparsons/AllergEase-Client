import axios from "axios";
const BASE_URL= `https://allergease.herokuapp.com`

const getUserAllergens = async userId => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/users/${userId}/allergens`
  );
  return response.data;
};

const addUserAllergen = async (userId, userAllergenId) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/${userId}/allergens/${userAllergenId}`)

  return response.data
}

const removeUserAllergen = async (userId, userAllergenId) => {
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/users/${userId}/allergens/${userAllergenId}`)

  return response.data
}

export default { getUserAllergens, addUserAllergen, removeUserAllergen };



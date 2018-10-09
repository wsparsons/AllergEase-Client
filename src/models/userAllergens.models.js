import axios from "axios";
const BASE_URL = `https://allergease.herokuapp.com`;

const getAllUserAllergens = async userId => {
  let token = localStorage.getItem("AllergEase Token");
  if (!token) return false;

  const response = await axios(`${BASE_URL}/api/users/${userId}/allergens`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

const createUserAllergen = async (userId, userAllergenId) => {
  let token = localStorage.getItem("AllergEase Token");
  if (!token) return false;

  const response = await axios(
    `${BASE_URL}/api/users/${userId}/allergens/${userAllergenId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};

const deleteUserAllergen = async (userId, userAllergenListId) => {
  let token = localStorage.getItem("AllergEase Token");
  if (!token) return false;

  const response = await axios.delete(
    `${BASE_URL}/api/users/${userId}/allergens/${userAllergenListId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};

export default { getAllUserAllergens, createUserAllergen, deleteUserAllergen };

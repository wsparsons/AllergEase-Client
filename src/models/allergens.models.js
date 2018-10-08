import axios from "axios";
const BASE_URL= `https://allergease.herokuapp.com`

const getAllAllergens = async () => {
  const response = await axios.get(
    `${BASE_URL}/api/allergens`
  );
  return response.data.response;
};

const getOneAllergen = async id => {
  const response = await axios.get(
    `${BASE_URL}/api/allergens/${id}`
  );
  return response.data.response;
};

export default { getAllAllergens, getOneAllergen };

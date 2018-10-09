import axios from "axios";
const BASE_URL= `https://allergease.herokuapp.com`

const getAllAllergensAliases = async () => {
  const response = await axios.get(
    `${BASE_URL}/api/allergens`
  );
  return response.data.response;
};


export default { getAllAllergensAliases };

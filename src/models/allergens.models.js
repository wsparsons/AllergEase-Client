import axios from "axios";

const getAllAllergens = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/allergens`
  );
  return response.data.response;
};


export default { getAllAllergens };

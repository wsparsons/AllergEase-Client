import axios from "axios";
const BASE_URL= `https://allergease.herokuapp.com`


const search = async (userId, barcode) => {
  const response = await axios.post(
    `${BASE_URL}/api/users/${userId}/barcode`,
    { barcode }
  );

  return response;
};

export default { search };

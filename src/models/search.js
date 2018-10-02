import axios from "axios";

const search = async (userId, barcode) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/users/${userId}/barcode`,
    { barcode }
  );

  return response;
};

export default { search };

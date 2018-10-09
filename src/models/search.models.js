import axios from "axios";
const BASE_URL = `https://allergease.herokuapp.com`;

const search = async (userId, barcode) => {
  let token = localStorage.getItem("AllergEase Token");
  if (!token) return false;
  
  const response = await axios(`${BASE_URL}/api/users/${userId}/barcode`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: { barcode }
  });  

  return response;
};

export default { search };

import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

// Get All Allergens

const getAllAllergens = async () => {
  const response = await axios.get(`${BASE_URL}/allergens`)
  return response.data
}

export default { getAllAllergens }
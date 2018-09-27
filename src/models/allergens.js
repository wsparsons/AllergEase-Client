import axios from 'axios'

// Get All Allergens

const getAllAllergens = async () => {
  const response = await axios.get(`${process.env.BASE_URL}/allergens`)
  return response.data
}

export default { getAllAllergens }
import axios from 'axios'

const getAllAllergens = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/allergens`)
  return response.data.response
}

const getUserAllergens = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/${id}/allergens`)
  console.log("USER ALLERGENS!!!!",response)
  return response.data
}

export default { getAllAllergens, getUserAllergens }
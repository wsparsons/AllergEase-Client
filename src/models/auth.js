import axios from 'axios'

const login = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.BASE_URL}/login`, {email, password})
    const token = response.data.token 
    localStorage.setItem(process.env.TOKEN_NAME, token)
    return true
  } catch (e) {
    console.error(e.response)
    return false
  }
}

const verify = async () => {
  const token = localStorage.getItem(TOK)
}
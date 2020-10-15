import axios from "axios"

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response)
  }
)

export default instance

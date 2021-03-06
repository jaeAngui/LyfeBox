import Axios from 'axios'

export const BASE_URL = 'http://localhost:3001/'
const client = Axios.get({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${window.location.origin}`
      : 'http://localhost:3001/'
})

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers['authorization'] = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

export default client

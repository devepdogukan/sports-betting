import axios, { InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://api.the-odds-api.com/v4/sports',
})

api.interceptors.request.use((requestConfig: InternalAxiosRequestConfig) => {
  requestConfig.params = {
    ...requestConfig.params,
    apiKey: import.meta.env.VITE_ODDS_API_KEY,
  }

  return requestConfig
}, null)

export default api

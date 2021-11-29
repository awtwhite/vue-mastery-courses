import axios from 'axios'

// Create a single Axios instance for our entire app
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Base URL for all calls to use
  withCredentials: false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events') // i.e. baseURL + /path
  }
}

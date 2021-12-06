import axios from 'axios'

// NOTE in the course, we used `json-server` to host our db.json file to allow us to make API call to retrieve the data.
//
// You can install and run the server by:
//   1. Install the package: `npm install -g json-server`
//   2. Run the server: `json-server --watch db.json`

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
  },
  getEvent(id) {
    return apiClient.get('/events/' + id) //
  }
}

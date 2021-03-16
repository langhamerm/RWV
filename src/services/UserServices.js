import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://us-central1-fcc-social.cloudfunctions.net/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getUsers() {
    return apiClient.get('/users')
    .then((users) => {
        console.log(users)
    })
  },
  getUser(id) {
    return apiClient.get('/users/' + id)
  }
}
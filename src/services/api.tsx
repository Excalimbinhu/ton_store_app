import axios from 'axios';

const api = (controller: string) => {
  return axios.create({
    baseURL: "https://fakestoreapi.com/" + controller
  })
}

export default api
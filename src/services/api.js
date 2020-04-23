import axios from 'axios';

const api = axios.create({
  baseURL: `http://cors-anywhere.herokuapp.com/https://l2infinityworld.com/function/`
})

export default api;
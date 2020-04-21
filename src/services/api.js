import axios from 'axios';

const api = axios.create({
  baseURL: `https://l2infinityworld.com/function/`
})

export default api;
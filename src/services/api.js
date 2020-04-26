import axios from 'axios';

const api = axios.create({
  baseURL: `https://l2infinityworld.com/function/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
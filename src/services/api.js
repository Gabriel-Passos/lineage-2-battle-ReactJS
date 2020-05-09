import axios from 'axios';

const api = axios.create({
  baseURL: `http://l2infinityworld.com/function/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
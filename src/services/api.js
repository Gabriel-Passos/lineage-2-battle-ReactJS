import axios from 'axios';

const api = axios.create({
  baseURL: `https://l2infinityworld.com/function/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default api;
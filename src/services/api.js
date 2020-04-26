import axios from 'axios';

const api = axios.create({
  baseURL: `http://cors-anywhere.herokuapp.com/http://l2infinityworld.com/function/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: `http://cors-anywhere.herokuapp.com/http://l2infinityworld.com/test/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  proxy: {
    host: 'http://localhost:',
    port: '3000'
  }
});

export default api;
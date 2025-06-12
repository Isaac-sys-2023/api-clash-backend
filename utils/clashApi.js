const axios = require('axios');
require('dotenv').config();

const API = axios.create({
  //baseURL: 'https://api.clashroyale.com/v1',
  baseURL: 'https://proxy.royaleapi.dev/v1',
  headers: {
    Authorization: `Bearer ${process.env.CLASH_API_KEY}`
  }
});

module.exports = API;

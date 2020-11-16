const axios = require('axios');
const { url } = require('../config')

const httpClient = axios.create({
    baseURL: url
})

module.exports = httpClient;

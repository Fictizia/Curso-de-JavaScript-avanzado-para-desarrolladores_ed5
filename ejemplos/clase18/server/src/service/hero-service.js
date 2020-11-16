const http = require('../lib/http');

const getHeroes = async hero => http.get(`/search/${hero}`);

module.exports = {
    getHeroes,
}

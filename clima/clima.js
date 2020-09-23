const axios = require('axios');

var apiKey = '2b5974d88b66426aef28d707aa370b9f';

// SOLICITAR DATA DE CLIMA
const getClima = async(lat, lng) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }2&lon=${ lng }&appid=${ apiKey }&units=metric`;
    const resp = await axios.get(apiURL);
    return resp.data.main.temp;
}

module.exports = { getClima }
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=21bd87de6464da1e97d7bef6d7a7550e&units=imperial';

//

module.exports = {
	getTemp: function (location) {
	  var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function(res) {
        if(res.data.cod && res.data.message) {
        	throw new Error(res.data.message);
        } else {
        	return res.data.main.temp;
        }
      }, function (res) {
         throw new Error(res.data.message);
      });
	}
}
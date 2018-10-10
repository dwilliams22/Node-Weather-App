const request = require("request");

let getWeather = (latitude, longitude, callback) => {
   request({
      url: `https://api.darksky.net/forecast/82984bfa25e83ede5929090e3021edb5/${latitude},${longitude}`,
      json: true
   }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
         callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
         });
      } else {
         callback("Unable to fetch weather.");
      }
   })
};

module.exports = {
   getWeather
}
const request = require("request");

request({
   url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20st%20philadelphia&key=AIzaSyC3xdoA_ABtNNTLFrbuZ2sdfnzhpdxgTdk",
   json: true
}, (error, response, body) => {
   console.log(body);
});
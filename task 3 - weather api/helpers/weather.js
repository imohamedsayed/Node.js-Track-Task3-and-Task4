const request = require("request");

function getWeather(lat, lng, cb) {
  const APIKey = "f8ae8d66dec64a67a9b154108231707";

  const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${lat}, ${lng}`;

  request({ url, json: true }, (error, res) => {
    if (error) {
      cb("Unable to connect to weather service", undefined);
    } else if (res.body.error) {
      cb(res.body.error.message, undefined);
    } else {
      cb(undefined, {
        location: res.body.location.name,
        weather: res.body.current.condition,
        temp: res.body.current.temp_c,
      });
    }
  });
}

module.exports = { getWeather };

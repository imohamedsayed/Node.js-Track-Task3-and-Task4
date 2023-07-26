const { getWeather } = require("./helpers/weather");
const { getGeocode } = require("./helpers/geocode");

const location = process.argv[2];

if (location) {
  getGeocode(location, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const { lng, lat } = data;

      getWeather(lat, lng, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data.location, lat, lng);
          console.log(data.weather);
          console.log("temp : ", data.temp);
        }
      });
    }
  });
} else {
  console.log("Please provide us with the location");
}

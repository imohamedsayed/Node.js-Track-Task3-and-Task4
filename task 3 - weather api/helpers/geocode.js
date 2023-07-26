const request = require("request");

const getGeocode = (location, cb) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibW9oYW1tZWQtc2F5ZWQiLCJhIjoiY2w4MHpneWo1MGIyZzNvcjFqMWp1b21hbCJ9.2nS08WwA35K4LeqCrqDR3w`;
  request({ url: geocodeUrl, json: true }, (error, res) => {
    if (error) {
      cb("Unable to connect to location services", undefined);
    } else if (res.body.message) {
      cb(res.body.message, undefined);
    } else if (!res.body.features.length) {
      cb("Country name is wrong", undefined);
    } else {
      const lng = res.body.features[0].center[0];
      const lat = res.body.features[0].center[1];
      cb(undefined, { lng, lat });
    }
  });
};

module.exports = { getGeocode };

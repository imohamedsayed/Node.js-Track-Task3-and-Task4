const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening ...");
});

// Register Statics
app.use(express.static("public"));

// Register template engine, views and partials
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./template/views"));

hbs.registerPartials(path.join(__dirname, "./template/partials"));

/*
    -->> end points
*/

let d = new Date();
let todayDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    img: "illustration1.svg",
  });
});

app.get("/weather", (req, res) => {
  res.render("check_weather", {
    title: "Weather",
    location: {
      city: "Assiut",
      country: "Egypt",
    },
    lat: 25.002,
    lat: 31.252,
    weather: {
      icon: "partial-cloudy.png",
      temp: 21,
    },
    date: todayDate,
  });
});

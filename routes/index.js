const express = require("express");
const mcRouter = express.Router();

const { cities } = require("../cities");
const { countries } = require("../countries");
const { citiesByCountry } = require("../citiesByCountry");
const { capitals } = require("../capitals");

mcRouter.get("/countries", (req, res) => {
  res.send(countries);
});

mcRouter.get("/cities", (req, res) => {
  res.send(cities);
});

mcRouter.get("/capitals", (req, res) => {
  res.send(capitals);
});

mcRouter.get("/capitals/:country", (req, res) => {
  const country = req.params.country;
  res.send(capitals[country] || "No capital city found");
});

mcRouter.get("/cities/:country", (req, res) => {
  const country = req.params.country;
  res.send(citiesByCountry[country] || []);
});

mcRouter.get("/cities/:country/info", (req, res) => {
  const country = req.params.country;
  const cities = citiesByCountry[country] || [];
  if (capitals[country]) {
    res.send({
      country: country,
      capital: capitals[country],
      cities: cities,
    });
  } else {
    res.send("No capital city found");
  }
});

module.exports = mcRouter;

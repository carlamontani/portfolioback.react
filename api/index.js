const express = require("express");
const cors = require("cors");
const app = express();

// Apply CORS middleware to allow all origins
app.use(cors({
  origin: '*',  // Allow all origins
}));

// Import JSON data for about and portfolio
const about = require("../JSON/About.json");
const portfolio = require("../JSON/Portfolio.json");

app.get("/", (req, res) => {
  res.json({ message: "API funcionando en Vercel" });
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

module.exports = app;

const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://portfoliofront-react-node.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const about = require("../JSON/About.json");
const portfolio = require("../JSON/Portfolio.json");

app.get("/", (req, res) => {
  res.json("API funcionando en Vercel");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

module.exports = app;

const express = require("express");
const cors = require("cors");
const app = express();

const allowedOrigins = [
  "https://portfoliofront-react-node.vercel.app",          // main production domain
  "https://portfoliofront-react-node-uwoe-qh1cng1p6.vercel.app" // preview deployment
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

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

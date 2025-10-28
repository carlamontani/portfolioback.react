const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://portfoliofront-react-node.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

const port = process.env.PORT || 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/", (req, res) => {
  res.json("funcionando");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

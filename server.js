const express = require("express");
require("dotenv").config();

const app = express();

const env = {
  port: process.env.PORT,
  author: process.env.AUTHOR,
};

app.get("/", (req, res) => {
  res.send({
    message: "Server is running 🍀",
  });
});

app.get("/ip", (req, res) => {
  const ip =
    req.headers["cf-connecting-ip"] ||
    (req.headers["x-forwarded-for"]
      ? req.headers["x-forwarded-for"].split(", ")[0]
      : "") ||
    "";
  res.send({
    ip,
    author: env.author,
  });
});

app.listen(env.port, () => {
  console.log(`Server started on port ${env.port}`);
});

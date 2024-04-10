const express = require("express");

const app = express();

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
  });
});

app.listen(8080, () => {
  console.log(`Server started on port ${8080}`);
});

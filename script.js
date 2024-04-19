require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/facebook", (req, res) => {
  res.send("@HarshitKumar");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login in faceboobk page</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Go to the my youtube channel</h2>");
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express"),
  path = require("path"),
  app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/playnow", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/terms", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/privacy", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(4001, () => console.log("App running on 4001"));
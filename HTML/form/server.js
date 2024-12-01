const express = require("express");
const app = express();
const bodyPaser = require("body-parser");

app.use(bodyPaser.urlencoded({ extended: true }));

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send("<h1>Parabens</h1>");
});

app.listen(3030);

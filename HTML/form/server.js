const express = require("express");
const app = express();
const bodyPaser = require("body-parser");

app.use(bodyPaser.urlencoded({ extended: true }));

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send("<h1>Parabens. Usuario Incluido</h1>");
});

app.post("/usuarios/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send("<h1>Parabens. Usuario Alterado</h1>");
});

app.listen(3030);

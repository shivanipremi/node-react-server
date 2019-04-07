const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

let port = process.env.PORT || 5000;


app.listen(port);

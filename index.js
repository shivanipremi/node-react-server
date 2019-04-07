const express = require("express");
const app = express();

let port = process.env.port || 3000;
app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

app.listen(port);

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = 5000;
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("listening on port : ", PORT);
});

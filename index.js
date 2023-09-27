const express = require("express");
const db = require("./db.js");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Kudos , The app is running on port", port);
});

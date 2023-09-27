const express = require("express");
const db = require("./db.js");
const testCases=require('./routes/testCase.js');
const submit=require('./routes/submit.js');
const result=require('./routes/result.js')

const app = express();
const port = 3000;


app.use('/testCase', testCases);
app.use('/submit', submit);
app.use('/result', result);


app.listen(port, () => {
  console.log("Kudos , The app is running on port", port);
});

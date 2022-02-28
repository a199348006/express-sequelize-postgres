const express = require('express');
const db = require('./src/models/index');
const app = express();
const post = 6789;

app.use(express.json()); // for parsing applicaion/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(port, function () {
  console.log(`listening at http://localhost:${port}`)
});
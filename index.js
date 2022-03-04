const express = require('express');
const db = require('./src/models/index');
const indexRouter = require('./src/routes/index')
const app = express();
const port = 6789;

db.sequelize.sync({})
  .then(() => {
    console.log('Database is connecting...')
  })
  .catch(err => {
    console.error('sequelize.sync() error message: ', err)
  });

app.use(express.json()); // for parsing applicaion/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api', indexRouter);

app.listen(port, function () {
  console.log(`listening at http://localhost:${port}`)
});
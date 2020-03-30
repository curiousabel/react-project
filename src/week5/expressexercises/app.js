const env = require('dotenv').config({ path: `${__dirname}/.env` });
const bodyParser = require('body-parser');
const express = require('express');

const myroutes = require('./routes');



const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('\n\nHello world!\n\n');
});

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use((req, res, next) => {
  console.log('Time:', new Date() + 3600000 * -5.0); // GMT-->EST
  next();
});
app.get('/', (req, res, next) => {
  next(new Error('Something went wrong :-('));
});

app.use((err, req, res, next) => {
  // Do logging and user-friendly error message display
  console.error(err);
  res.status(500).send('internal server error');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
app.use('/thisapp', myroutes);

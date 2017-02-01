const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ENV = process.env;

let batteryStatus = {};

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    data: batteryStatus
  });
});

app.post('/', (req, res) => {
  if (!('key' in req.query) || req.query.key !== (ENV['SECRET_KEY'] || '')) {
    throw new Error('Invalid key.');
  }
  if (!req.body) {
    throw new Error('Invalid data.');
  }
  batteryStatus = req.body;
  res.json({
    status: 'ok'
  });
});

app.use((_err, req, res, next) => {
  res.status(400).json({
    status: 'error',
    data: _err.message
  });
  next();
});

app.listen(ENV['PORT'] || 3000, () => {
  console.log('Listening...');
});

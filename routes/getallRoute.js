import express from 'express';
import User from '../models/Entry';

const router = express.Router();

const datetime = require('node-datetime');

const router = express.Router();

let id = 1;
const dt = datetime.create();
const formatted = dt.format('m/d/Y');

const entries = [
  new User(id, 'my trip was cool', '29-3-2000', formatted),
  new User(id, 'My second post is awesome', 'none@none.com', formatted),
];

router.get('/', (req, res) => {
  res.send(entries);
});

module.exports = router;

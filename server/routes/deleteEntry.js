import express from 'express';
import User from '../models/entrymodel';

const router = express.Router();
const datetime = require('node-datetime');

const id = 1;
const dt = datetime.create();
const formatted = dt.format('m/d/Y');

const entries = [
  new User(id, 'my trip was cool', '29-3-2000', formatted),
  new User(2, 'My second post is awesome', 'none@none.com', formatted),
];

router.get('/', (req, res) => {
  res.send(entries);
});

router.delete('/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  entries.pop(arr);
  res.send(entries);
});


module.exports = router;

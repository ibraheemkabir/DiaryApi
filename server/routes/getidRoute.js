import express from 'express';
import User from '../models/entrymodel';

const router = express.Router();
const datetime = require('node-datetime');

const id = 1;
const dt = datetime.create();
const formatted = dt.format('m/d/Y');
const entries = [
  new User(id, 'Dear Diary My first post', 'my trip was cool', formatted),
];

router.get('/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  res.send(arr);
});

module.exports = router;

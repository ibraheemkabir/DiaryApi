import express from 'express';
import User from '../models/entrymodel';

const datetime = require('node-datetime');

const router = express.Router();

let id = 1;
const dt = datetime.create();
const formatted = dt.format('m/d/Y');

const entries = [
  new User(id, 'Dear diary today is my fist post', 'my first post', '29-34-2016'),
];

router.put('entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  arr.name = req.body.name;
  arr.title = req.body.title;
  res.send(arr);
});

module.exports = router;

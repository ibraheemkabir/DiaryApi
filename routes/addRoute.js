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

router.post('/', (req, res) => {
  const enter = {
    id: id += 1,
    title: req.body.title,
    content: req.body.content,
    date: formatted,
  };

  entries.push(enter);
  res.send(entries);
});

module.exports = router;

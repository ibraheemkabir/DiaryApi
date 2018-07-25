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

router.get('/', (req, res) => {
  res.send(entries);
});

module.exports = router;

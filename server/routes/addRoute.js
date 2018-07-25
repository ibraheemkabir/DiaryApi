import express from 'express';
import entries from '../helpers/array';

const datetime = require('node-datetime');

const router = express.Router();

let id = 1;
const dt = datetime.create();
const formatted = dt.format('m/d/Y');


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

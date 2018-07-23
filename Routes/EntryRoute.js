import express from 'express';
import User from '../models/Entry';

const router = express.Router();

const entries = [
  new User('first Post', 'my trip was cool', '29-3-2000', 21),
  new User('Second Post', 'My second post is awesome', 'none@none.com', 2),
  new User('Third Post', 'My Third post is awesome', 'none@none.com', 4),
  new User('Fourth Post', 'My fourth post is awesome', 'none@none.com', 1),
];

router.get('/', (req, res) => {
  res.send(entries);
});

router.get('/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  res.send(arr);
});

router.post('/', (req, res) => {
  const enter = {
    Title: req.body.title,
    Body: req.body.body,
    Date: req.body.Date,
    Uid: req.body.Uid,
  };

  entries.push(enter);
  res.send(entries);
});

router.put('/:id', (req, res) => {
  const arr = entries.find(c => c.Uid === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  arr.Body = req.body.body;
  arr.Title = req.body.title;
  res.send(arr);
});

router.delete('/:id', (req, res) => {
  const arr = entries.find(c => c.Uid === parseInt(req.params.id, 10));
  entries.pop(arr);
  res.send(arr);
});


module.exports = router;

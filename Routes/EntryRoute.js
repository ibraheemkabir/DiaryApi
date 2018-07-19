import express from 'express';
import User from '../models/Entry';

const router = express.Router();

const entries = [
  new User('first', 'my trip was cool', '29-3-2000', 21),
  new User('Bob Coonce', 'bcoonce', 'none@none.com', 'real'),
  new User('Euri', 'euri', 'none@none.com', 'real'),
  new User('Norman', 'jcoonce', 'none@none.com', 'real'),
];

router.get('/entries', (req, res) => {
  res.send(entries);
});

router.get('/entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  res.send(arr);
});

router.post('/entries/', (req, res) => {
  const enter = {
    id: entries.lenght + 1,
    name: req.body.name,
    Title: req.body.title,
  };

  entries.push(enter);
  res.send(entries);
});

router.put('/entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  arr.name = req.body.name;
  arr.title = req.body.title;
  res.send(arr);
});

router.delete('/entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  entries.pop(arr);
  res.send(arr);
});


module.exports = router;

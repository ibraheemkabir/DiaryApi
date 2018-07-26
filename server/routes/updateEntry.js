import express from 'express';
import entries from '../helpers/array';

const router = express.Router();

router.put('/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  arr.name = req.body.name;
  arr.title = req.body.title;
  res.send(arr);
});

module.exports = router;

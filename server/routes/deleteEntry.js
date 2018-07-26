import express from 'express';
import entries from '../helpers/array';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(entries);
});

router.delete('/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  entries.pop(arr);
  res.send(entries);
});


module.exports = router;

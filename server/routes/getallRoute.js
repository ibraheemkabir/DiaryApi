import express from 'express';
import entries from '../helpers/array';

const router = express.Router();


router.get('/', (req, res) => {
  res.send(entries);
});

module.exports = router;

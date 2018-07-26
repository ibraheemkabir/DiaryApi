import express from 'express';

const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
  res.send('Welcome to mydiary rest API');
});

module.exports = router;

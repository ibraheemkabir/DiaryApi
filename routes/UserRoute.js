import express from 'express';
import User from '../models/User';

const router = express.Router();

const Users = [
  new User('James Coonce', 'jcoonce', 'none@none.com', 'real'),
  new User('Bob Coonce', 'bcoonce', 'none@none.com', 'real'),
  new User('Euri', 'euri', 'none@none.com', 'real'),
  new User('Norman', 'jcoonce', 'none@none.com', 'real'),
];

router.get('/', (req, res) => {
  res.send(Users);
});

router.post('/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    // save the user
    Users.push(newUser);
    res.send(Users);
  }
});

router.post('/signin', (req, res) => {
  const users = Users.find(Y => Y.username === req.body.username);
  if (!users) res.status(404).send('The user is invalid');
  else if (users.password === req.body.password) {
    res.send('signin succesful');
  } else {
    //res.send('login unsuccessful');
    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
  }
});


module.exports = router;

const express = require('express');

const app = express();

app.use(express.json());

const Users = [
  { id: 1, Username: 'kabir', Password: 'kabir' },
  { id: 2, Username: '5', Password: 'entry' },
];

app.get('/users', (req, res) => {
  res.send(Users);
});

app.post('users/signup', (req, res) => {
  if (!req.body.Username || !req.body.Password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    const newUser = {
      id: Users.lenght + 1,
      Username: req.body.Username,
      Password: req.body.Password,
    };
    // save the user
    Users.push(newUser);
    res.send(Users);
  }
});

app.post('users/signin', (req, res) => {
  const users = Users.find(Y => Y.Username === req.body.Username);
  if (!users) res.status(404).send('The user is invalid');
  else if (users.Password === req.body.Password) {
    res.send('welldone');
  } else {
    res.send('what');
    //  res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
  }
});

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

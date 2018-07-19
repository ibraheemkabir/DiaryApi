const express = require('express');

const app = express();

app.use(express.json());

const entries = [
  {
    id: 1, entry: 'ui', title: 'entry', Uid: 1,
  },
  {
    id: 2, entry: '5', title: 'entry', Uid: 2,
  },
];

const Users = [
  { id: 1, Username: 'kabir', Password: 'kabir' },
  { id: 2, Username: '5', Password: 'entry' },
];

app.get('entries/', (req, res) => {
  res.send(entries);
});

app.get('entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  res.send(arr);
});

app.post('entries/', (req, res) => {
  const enter = {
    id: entries.lenght + 1,
    name: req.body.name,
    Title: req.body.title,
  };

  entries.push(enter);
  res.send(entries);
});

app.put('entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  if (!arr) res.status(404).send('The entry is invalid');
  arr.name = req.body.name;
  arr.title = req.body.title;
  res.send(arr);
});

app.delete('entries/:id', (req, res) => {
  const arr = entries.find(c => c.id === parseInt(req.params.id, 10));
  entries.pop(arr);
  res.send(arr);
});

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

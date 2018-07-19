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

app.get('/entries', (req, res) => {
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

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

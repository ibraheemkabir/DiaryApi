const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const add = require('./routes/addRoute');
const del = require('./routes/deleteEntry');
const all = require('./routes/getallRoute');
const getentry = require('./routes/getidRoute');
const Update = require('./routes/updateEntry');

app.use('/api/v1/entry/', add);
app.use('/api/v1/entry/', del);
app.use('/api/v1/entry/', all);
app.use('/api/v1/entry/', getentry);
app.use('/api/v1/entry/', Update);

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;

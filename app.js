const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const add = require('./server/routes/addRoute');
const del = require('./server/routes/deleteEntry');
const all = require('./server/routes/getallRoute');
const getentry = require('./server/routes/getidRoute');
const Update = require('./server/routes/updateEntry');

app.use('/api/v1/entry/', add);
app.use('/api/v1/entry/', del);
app.use('/api/v1/entry/', all);
app.use('/api/v1/entry/', getentry);
app.use('/api/v1/entry/', Update);

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;

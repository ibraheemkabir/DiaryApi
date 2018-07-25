const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/addRoute');

app.use('/api/v1/entry/', routes);

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;

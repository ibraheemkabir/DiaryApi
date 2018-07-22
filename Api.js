const bodyParser = require('body-parser');
const express = require('express');

const port = 3000;

const routes = require('./Routes/UserRoute');
const routes2 = require('./Routes/EntryRoute');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1/users', routes);
app.use('/api/v1/entries', routes2);


app.listen(port);
console.log('Listening on port {$port}');

module.exports = app;

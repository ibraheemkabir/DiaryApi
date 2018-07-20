const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./routes/UserRoute');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', routes);


const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

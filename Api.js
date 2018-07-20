const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./Routes/EntryRoute');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', routes);


const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

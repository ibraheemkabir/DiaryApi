const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./routes/UserRoute');
const routes2 = require('./Routes/EntryRoute');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1/users', routes);
app.use('/api/v1/entries', routes2);


const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

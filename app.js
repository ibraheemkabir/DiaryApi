const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const all = require('./server/routes/getallRoute');

app.use('/api/v1/entry/', all);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
  console.log('Listening on port...');
});

module.exports = app;

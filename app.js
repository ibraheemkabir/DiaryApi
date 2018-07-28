const bodyParser = require('body-parser');
const express = require('express');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const home = require('./server/routes/index');
const entry = require('./server/routes/entryroute');


app.use('/', home);
app.use('/api/v1/entry/', entry);


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
  console.log('Listening on port...');
});

module.exports = app;

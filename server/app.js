// Base URL: https://elplay.herokuapp.com/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const routes = require('./routes');

const port = process.env.PORT || 8888;

const app = express();

app.set('port', port);
app.use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../public')))
  .use('/', routes);

app.listen(app.get('port'), () => { console.log('Express server listening on port ' + app.get('port')) });

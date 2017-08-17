const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const init = (data) => {
  const app = express();
  const controllers = require('./controllers')(data);

  app.use('/libs', express.static(path.join(__dirname, '../node_modules/')));
  app.use(express.static(path.join(__dirname, '../../dist/')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  require('./routers').attachTo(app, controllers);

  return app;
};

module.exports = { init };

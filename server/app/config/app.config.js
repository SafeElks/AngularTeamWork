const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('../../config');
const MongoStore = require('connect-mongo')(session);
const multer = require('multer');

const attachTo = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded( { extended: true } ));

  app.use(cookieParser('keyboard cat'));
  app.use(session({
    store: new MongoStore({ url: config.connectionString }),
    saveUninitialized: true,
    resave: false,
    secret: 'secret',
    maxAge: 60000,
  }));

  app.use(multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, './src/assets/uploads');
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + '.jpg');
      },
    }),
  }).single('photo'));
};

module.exports = { attachTo };

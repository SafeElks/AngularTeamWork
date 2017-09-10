const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('../../config');
const MongoStore = require('connect-mongo')(session);
const multer = require('multer');
const cloudinary = require('cloudinary');

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
        cb(null, './server/images');
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + '.jpg');
      },
    }),
  }).single('photo'));

  cloudinary.config({
    cloud_name: 'ds0cvuu5v',
    api_key: '211411352162526',
    api_secret: 'AQBugITNNjFxTuGaGPOgxSs0C-A',
  });
};

module.exports = { attachTo };

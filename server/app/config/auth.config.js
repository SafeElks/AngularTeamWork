const { Strategy } = require('passport-local');
const passport = require('passport');

const attachTo = (app, usersData) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new Strategy('local',
    (username, password, done) => {
      return usersData.getByObjectName(username)
        .then((user) => usersData.checkPassword(user, password))
        .then((user) => done(null, user))
        .catch((error) => done(error));
    }
  ));

  passport.serializeUser((user, done) => {
    return done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    return usersData.getById(id)
      .then((user) => done(null, user))
      .catch((error) => done(error));
  });

  app.use((req, res, next) => {
    res.locals = res.locals || {};

    res.locals.user = req.user;

    next();
  });
};

module.exports = { attachTo };

const passport = require('passport');

const usersController = (data) => {
  return {
    getAllUsers(req, res) {
      return data.users.getAll()
        .then((users) => {
          return res.json(users)
        });
    },

    createUser(req, res) {
      const user = JSON.parse(req.body);

      return data.users.create(user)
        .then((dbUser) => {
          req.login(dbUser, (err) => {
            if (err) {
              return Promise.reject(err);
            }
            return res
              .status(201)
              .json({successMsg: 'You are successfully registered!'})
          });
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err})
        });
    },

    authenticate(req, res, next) {
      return passport.authenticate('local', (err, user) => {
        if (err) {
          return res.status(400).json({errorMsg: err})
        }
        req.login(user, (error) => {
          if (error) {
            return res.status(400).json({errorMsg: err})
          }
          return res
            .status(201)
            .json({successMsg: 'You are successfully logged in!'})
        });
        return next();
      })(req, res, next);
    },

    getUserById(req, res) {
      if (!req.user) {
        return res.status(401).json({err: 'You are not logged in'})
      }
      const id = req.params.id;
      return data.users.getById(id)
        .then((user) => {
          return res.status(200).json(user);
        });
    },

    logoutUser(req, res) {
      req.logout();
      return res
        .status(200)
        .json({infoMsg: 'You are logged out!'})
    },
  };
};

module.exports = usersController;

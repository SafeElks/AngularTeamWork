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
      if (req.user) {
        return res.status(400).json({ errorMessage: 'You are already logged in!' })
      }

      const user = {
        name: req.body.name,
        email: req.body.email,
        photo: 'blank-profile-picture-973460_640.png',
        password: req.body.password,
        weight: +req.body.weight,
        height: +req.body.height,
        age: +req.body.age,
        gender: req.body.gender,
        dreamKg: +req.body.dreamKg
      };
      return data.users.create(user)
        .then(() => {
          return res
            .status(201)
            .json({successMsg: 'You are successfully registered! Redirecting...'})
        })
        .catch((err) => {
          return res.status(400).json({errorMessage: err})
        });
    },

    authenticate(req, res, next) {
      if (req.user) {
        return res.status(400).json({ errorMessage: 'You are already logged in!' })
      }
      return passport.authenticate('local', (err, user) => {
        if (err) {
          return res.status(400).json({ errorMessage: err })
        }
        req.login(user, (error) => {
          if (error) {
            return res.status(400).json({ errorMessage: error })
          }
          return res
            .status(200)
            .json({
              name: req.user.name,
              id: req.user._id,
              msg: 'You are logged in!'
            });
        });
        return next();
      })(req, res, next);
    },

    getUserById(req, res) {
      if (!req.user) {
        return res.status(401).json({err: 'You are not logged in!'})
      }
      const id = req.params.id;
      return data.users.getById(id)
        .then((user) => {
          return res.status(200).json(user);
        });
    },

    logoutUser(req, res) {
      req.session.destroy();
      return res
        .status(200)
        .json({infoMsg: 'You are logged out!'})
    },

    uploadPicture(req, res) {
      console.log(req);
      if (!req.user) {
        return res.status(401).json({errorMsg: "You are not logged in!"});
      }
      const id = req.params.id;
      return data.users.getByObjectName(req.user.name)
        .then((user) => {
          const currentUserId = user._id.toString();
          if (id !== currentUserId) {
            return Promise.reject('It is not your profile');
          }
          const photo = req.file;
          return data.users.updateProfilePicture(id,
            photo);
        })
        .then(() => {
          res.status(200).json({info: 'File upload successfully.'});
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err});
        });
    }
  };
};

module.exports = usersController;

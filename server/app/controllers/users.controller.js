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
        password: req.body.password
      };

      return data.users.create(user)
        .then(() => {
          return res
            .status(201)
            .json({successMsg: 'You are successfully registered!'})
        })
        .catch((err) => {
          return res.status(400).json({errorMsg: err})
        });
    },

    authenticate(req, res) {
      if (req.user) {
        return res.status(400).json({ errorMessage: 'You are already logged in!' })
      }
      return res
        .status(200)
        .json({
          msg: 'You are logged in!'
        });
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
  };
};

module.exports = usersController;

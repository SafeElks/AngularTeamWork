const attachTo = (app, { usersController }) => {
  app.get('/api/users', usersController.getAllUsers);
  app.post('/api/users', usersController.createUser);
  app.get('/api/users/:id', usersController.getUserById);
  app.post('/api/authenticate', usersController.authenticate);
  app.get('/api/logout', usersController.logoutUser);
  app.post('/api/upload', usersController.uploadPicture);
  app.post('/api/users/kg', usersController.updateWeight);
  app.post('/api/users/height', usersController.updateHeight);
  app.post('/api/users/age', usersController.updateAge);
  app.post('/api/users/isLiked', usersController.isProfileLiked);
  app.post('/api/users/like', usersController.likeProfile);
  app.post('/api/users/unlike', usersController.unlikeProfile);
};

module.exports = { attachTo };

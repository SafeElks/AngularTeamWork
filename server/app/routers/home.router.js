const attachTo = (app, {homeController}) => {
  app.get('/api/hello', homeController.getMainPage);
};

module.exports = {attachTo};

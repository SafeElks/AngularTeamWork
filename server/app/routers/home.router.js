const attachTo = (app, {homeController}) => {
  app.get('/hello', homeController.getMainPage);
};

module.exports = {attachTo};

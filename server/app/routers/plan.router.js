const attachTo = (app, {planController}) => {
  app.post('/api/caloriesPerDay', planController.getCaloriesPerDay);
};

module.exports = {attachTo};

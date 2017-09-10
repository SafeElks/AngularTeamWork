const planController = (data) => {
  return {
    getCaloriesPerDay(req, res) {
      const weight = +req.body.weight;
      const height = +req.body.height;
      const age = +req.body.age;
      const genderConstant = req.body.gender === 'true' ? 5 : -161;
      const activityConstant = +req.body.activity;
      const days = +req.body.days;
      const dreamKg = +req.body.dreamKg;
      const difference = dreamKg - weight;
      const BMR = activityConstant * (10 * weight + 6.25 * height - 5 * age + genderConstant);
      const calorieDifference = (7000 * difference) / days;
      const caloriesPerDay = BMR + calorieDifference;

      res.json({calories: Math.ceil(caloriesPerDay)});
    }
  }
};

module.exports = planController;

const planController = (data) => {
  return {
    getCaloriesPerDay(req, res) {
      const weight = req.body.weight;
      const height = req.body.height;
      const age = req.body.age;
      const genderConstant = req.body.isMale ? 5 : -161;
      const activityConstant = req.body.activity;
      const BMR = activityConstant * (10 * weight + 6.25 * height - 5 * age + genderConstant);
    }
  }
};

module.exports = planController;

const homeController = () => {
  return {
    getMainPage(req, res){
      return res.send('Hello from server');
    },
  };
};

module.exports = homeController;

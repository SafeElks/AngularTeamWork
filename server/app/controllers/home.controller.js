const homeController = () => {
  return {
    getHomeInfo(req, res){
      return res.send('Home');
    },
  };
};

module.exports = homeController;

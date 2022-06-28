const controller = {}

controller.index = function(req, res, next) {
    res.render('index', {
        title: 'Homepage'
    });
  }

module.exports = controller;
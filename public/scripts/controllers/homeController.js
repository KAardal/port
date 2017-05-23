'use strict';
var app = app || {};

(function(module) {
  const homeController = {};
  homeController.index = () => {

    $('.tab').hide();
    $('#home').show();
  };

  module.homeController = homeController;
})(app);

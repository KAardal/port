'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};
  projectsController.index = () => {
    app.loadData();

    $('.tab').hide();
    $('#projects').show();
  };

  module.projectsController = projectsController;
})(app);

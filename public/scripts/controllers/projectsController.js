'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};
  projectsController.index = (() => {
    $('#projects').empty();
    app.Project.loadData();

    $('.tab').hide();
    $('#projects').show();
  });

  module.projectsController = projectsController;
})(app);

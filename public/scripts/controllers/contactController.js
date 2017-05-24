'use strict';
var app = app || {};

(function(module) {
  const contactController = {};
  contactController.index = () => {
    $('.tab').hide();
    $('#contact').show();

    app.repos.requestRepos(app.repoView.index);
  };


  module.contactController = contactController;
})(app);

'use strict';
var app = app || {};

(function(module) {
  const contactController = {};
  contactController.index = () => {

    $('.tab').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(app);

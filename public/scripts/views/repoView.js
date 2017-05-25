'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  repoView.index = function() {
    let render = Handlebars.compile($('#repo-template').html());
    let $contact = $('#contact');

    $contact.find('ul').empty();
    $contact.show().siblings().hide();

    $('#contact ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);

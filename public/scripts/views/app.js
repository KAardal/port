'use strict';

var app = app || {};

(function(module){
  function main() {
    app.handleBurgerMenu();
    app.handleWindowResize();
  }

  app.handleBurgerMenu = function() {
    $('#burger-open').on('click', function(e) {
      e.preventDefault();
      $('.main-nav').slideDown();
    });

    $('#burger-close').on('click', function() {
      $('.main-nav').slideUp();
    });
  }

  app.handleWindowResize = function() {
    if($(window).width() < 640) {
      $('.main-nav').slideUp(0);
    }

    $(window).on('resize', function() {
      if($(window).width() < 640) {
        $('#burger-close').click();
      } else {
        $('#burger-open').click();
      }
    })
  }

  main();

  app = module;
})(app);

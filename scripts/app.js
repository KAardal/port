'use strict';

var app = app || {};

(function(module){
  function main() {
    //app.loadData();
    app.handleBurgerMenu();
    app.handleWindowResize();
    app.handleMainNav();
    app.projectCounter();
  }

  // let projects = [];
  //
  // app.Project= function(projectData) {
  //   this.name = projectData.name;
  //   this.image = projectData.image;
  //   this.description = projectData.description;
  //   this.repoURL = projectData.repoURL;
  // }
  //
  // app.Project.prototype.toHtml = function () {
  //   let template = Handlebars.compile($('#project-template').text());
  //   return template(this);
  // };
  //
  // app.renderProjects = function(data) {
  //   data.map(function(projectObject) {
  //     projects.push(new app.Project(projectObject));
  //   })
  //
  //   projects.map(function(project){
  //     $('#projects').append(project.toHtml());
  //   });
  // }
  //
  // app.loadData = function() {
  //   if(localStorage.projectData) {
  //     app.renderProjects(JSON.parse(localStorage.projectData));
  //   } else {
  //     $.getJSON('/data/projectData.json')
  //       .then(function(data) {
  //         localStorage.setItem('projectData', JSON.stringify(data));
  //         app.renderProjects(data);
  //       }, function(err) {
  //         console.error(err);
  //       });
  //   }
  // }

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

  app.handleMainNav = function() {
    $('.main-nav li').on('click', function(e) {
      e.preventDefault();
      $('.tab').hide();
      $('#' + $(this).data('nav')).fadeIn();
    });
  }

  main();

  app = module;
})(app);

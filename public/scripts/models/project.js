'use strict';

var app = app || {};

(function(module){

  let projects;

  app.Project= function(projectData) {
    this.name = projectData.name;
    this.image = projectData.image;
    this.description = projectData.description;
    this.repoURL = projectData.repoURL;
  }

  app.Project.prototype.toHtml = function () {
    let template = Handlebars.compile($('#project-template').html());
    return template(this);
  };

  app.renderProjects = function(data) {
    data.forEach(function(projectObject) {
      projects.push(new app.Project(projectObject));
    })

    projects.forEach(function(project){
      $('#projects').append(project.toHtml());
    });
  }

  app.Project.loadData = function() {
    projects = [];
    if(localStorage.projectData) {
      app.renderProjects(JSON.parse(localStorage.projectData));
    } else {
      $.getJSON('public/data/projectData.json')
        .then(function(data) {
          localStorage.setItem('projectData', JSON.stringify(data));
          app.renderProjects(data);
        }, function(err) {
          console.error(err);
        });
    }
  }


  app = module;
})(app);

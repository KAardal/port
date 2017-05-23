'use strict';

var app = app || {};

(function(module){

  let projects = [];

  app.Project= function(projectData) {
    this.name = projectData.name;
    this.image = projectData.image;
    this.description = projectData.description;
    this.repoURL = projectData.repoURL;
  }

  app.Project.prototype.toHtml = function () {
    let template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  app.renderProjects = function(data) {
    data.map(function(projectObject) {
      projects.push(new app.Project(projectObject));
    })

    projects.map(function(project){
      $('#projects').append(project.toHtml());
    });
  }

  app.loadData = function() {
    if(localStorage.projectData) {
      app.renderProjects(JSON.parse(localStorage.projectData));
    } else {
      $.getJSON('/data/projectData.json')
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

'use strict';

var projects = [];

function Project(projectData) {
  this.name = projectData.name;
  this.image = projectData.image;
  this.description = projectData.description;
  this.repoURL = projectData.repoURL;
}

Project.prototype.toHtml = function () {
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');
  $newProject.find('.project-name').html(this.name);
  $newProject.find('.project-img').attr('src', this.image);
  $newProject.find('.project-description').html(this.description);
  $newProject.find('project-repo').attr('src', this.repoURL);
  return $newProject;
};

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});

$('.template').hide();

$('.main-nav li').on('click', function() {
  $('.tab').hide();
  $('#' + $(this).data('nav')).fadeIn();
});

'use strict';

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

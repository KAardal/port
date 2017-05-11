'use strict';

function main() {

}

function Project(projectData) {
  this.name = projectData.name;
  this.image = projectData.image;
  this.discription = projectData.discription;
  this.repoURL = projectData.repoURL;
}

Project.prototype.toHtml = function () {
  var $newProject = $('div.template').clone();
  
};

main();

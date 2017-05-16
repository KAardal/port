'use strict';

var projects = [];

function Project(projectData) {
  this.name = projectData.name;
  this.image = projectData.image;
  this.description = projectData.description;
  this.repoURL = projectData.repoURL;
}

Project.prototype.toHtml = function () {
  var template = Handlebars.compile($('#project-template').text());
  return template(this);
};

function renderProjects(data) {
  data.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  })

  projects.forEach(function(project){
    $('#projects').append(project.toHtml());
  });
}

if(localStorage.projectData) {
  renderProjects(JSON.parse(localStorage.projectData));
} else {
  $.getJSON('/data/projectData.json')
    .then(function(data) {
      localStorage.setItem('projectData', JSON.stringify(data));

      renderProjects(data);

    }, function(err) {
      console.log(err);
      console.error(err);
    });
}

$('#burger-close').on('click', function() {
  $('.main-nav').slideUp();
});

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

$('#burger-open').on('click', function(e) {
  e.preventDefault();
  $('.main-nav').slideDown();
});

$('.main-nav li').on('click', function(e) {
  e.preventDefault();
  $('.tab').hide();
  $('#' + $(this).data('nav')).fadeIn();
});

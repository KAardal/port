'use strict';

var app = app || {};

function main() {
  loadData();
  handleBurgerMenu();
  handleWindowResize();
  handleMainNav();
  projectCounter();
}

let projects = [];

function Project(projectData) {
  this.name = projectData.name;
  this.image = projectData.image;
  this.description = projectData.description;
  this.repoURL = projectData.repoURL;
}

Project.prototype.toHtml = function () {
  let template = Handlebars.compile($('#project-template').text());
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

function loadData () {
  if(localStorage.projectData) {
    renderProjects(JSON.parse(localStorage.projectData));
  } else {
    $.getJSON('/data/projectData.json')
      .then(function(data) {
        localStorage.setItem('projectData', JSON.stringify(data));
        renderProjects(data);
      }, function(err) {
        console.error(err);
      });
  }
}

function handleBurgerMenu() {
  $('#burger-open').on('click', function(e) {
    e.preventDefault();
    $('.main-nav').slideDown();
  });

  $('#burger-close').on('click', function() {
    $('.main-nav').slideUp();
  });
}

function handleWindowResize() {
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

function handleMainNav() {
  $('.main-nav li').on('click', function(e) {
    e.preventDefault();
    $('.tab').hide();
    $('#' + $(this).data('nav')).fadeIn();
  });
}

function projectCounter() {
  $('#footer ').text(projects
    .map(project => project.description.split(' '))
    .reduce((acc, cur) => acc += cur.length, 0)
  );
}

main();

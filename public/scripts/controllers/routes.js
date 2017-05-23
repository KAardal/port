'use strict';

page('/', app.homeController.index);
page('/projects', app.projectsController.index);
page('/contact', app.contactController.index);

page();

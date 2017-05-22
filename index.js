'use strict';
// Load Express
//COMMENT: I would rename this file server.js, index.js can be missleading.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('.'));

app.get('*', function(request, response) {
  console.log('404: file not found');
  response.status(404);
});

app.listen(PORT, function() {
  console.log('Portfolio is being served at localhost:5000');
});

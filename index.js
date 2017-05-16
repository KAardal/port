'use strict';
// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 5000;

// Define which directory we will serve files from
app.use(express.static('./data'));

// // Here is one way to set up a route... bats...
// app.get('/bats', function(request, response) {
//   console.log('Damn bats');
//   response.sendFile('public/bat-country.html', {root: '.'});
// })

app.get('*', function(request, response) {
  console.log('404: file not found');
  response.status(404);
});

app.listen(PORT, function() {
  console.log('Portfolio is being served at localhost:5000');
});

// Create web server
var http = require('http');         
var fs = require('fs');
var url = require('url');
var path = require('path');

// Create HTTP server
var server = http.createServer(function (req, res) {
  // Handle requests here
});

// Start the server
server.listen(3000, function () {
  console.log('Server is running on port 3000');
});
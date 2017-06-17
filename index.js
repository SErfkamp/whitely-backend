var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//TODO Database connection

// Setup server
var app = express();

app.use(bodyParser.json());
var server = require('http').createServer(app);
require('./routes')(app);

mongoose.connect('mongodb://localhost/whitely-app');


// Start server
server.listen(3000, '192.168.111.106', function () {
    console.log('Server listening on port 3000..');
});

// Expose app
module.exports = {
  app: app,
};

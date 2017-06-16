'use strict';

var express = require('express');

module.exports = function (app) {
  // Insert routes below
  app.use('/api/bag', require('./api/bag'));
  app.use('/api/order', require('./api/order'));
  app.use('/api/net', require('./api/net'));

  // Other routes return a 404
  app.get('/', function (req, res) {
    res.sendStatus(404);
  });
};

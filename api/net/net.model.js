'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var netSchema = new Schema({
  content: {
      type: String,
      required: false
  },
  status: {
      type: String,
      required: false
  },
    location: {
      lat: String,
      lon: String
  }
});

module.exports = mongoose.model('Net', netSchema);

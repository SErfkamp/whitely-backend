'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bagSchema = new Schema({
  status: {
      type: String,
      required: false
  },
  price: {
      type: Number,
      required: false
  },
  nets: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Net',
      required: false
    },
  ],
});

module.exports = mongoose.model('Bag', bagSchema);

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  status: {
      type: String,
      required: false
  },
  price: {
      type: Number,
      required: false
  },
  servicePartner: {
      type: String,
      required: false
  },
  location: {
      lat: String,
      lon: String
  },
  bag: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bag',
    required: false
}
});

module.exports = mongoose.model('Order', orderSchema);

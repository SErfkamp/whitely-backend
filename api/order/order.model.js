'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({}, { strict: false });

/*var orderSchema = new Schema({
    orderId: String,
    status: String,
    price: String,
    servicePartner: String,
    weight: String,
    username: String,
    location: {
        lat: String,
        lon: String
    },
    nets: [{
        netId: String,
        content: String,
        temp: String
    }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});*/

module.exports = mongoose.model('Order', orderSchema);

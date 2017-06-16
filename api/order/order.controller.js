'use strict';

var Order = require('./order.model');

function handleError(res, err) {
  return res.send(500, err);
}

exports.index = function (req, res) {
  Order.find(req.query).lean().exec(function (err, orders) {
    if (err) {
      return handleError(res, err);
    }

    return res.status(200).json(orders);
  });
};

exports.show = function (req, res) {
  Order.findById(req.params.id).lean().exec(function (err, order) {
    if (err) {
      return handleError(res, err);
    }

    if (!order) {
      return res.send(404);
    }

    return res.json(order);
  });
};

exports.create = function (req, res) {
  Order.create(req.body, function(err, newOrder) {
    if (err) {
      return handleError(res, err);
    }

    return res.json(newOrder);
  });
};
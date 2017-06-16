'use strict';

var Bag = require('./bag.model');

function handleError(res, err) {
  return res.send(500, err);
}

exports.index = function (req, res) {
  Bag.find(req.query).lean().exec(function (err, bags) {
    if (err) {
      return handleError(res, err);
    }

    return res.status(200).json(bags);
  });
};

exports.show = function (req, res) {
  Bag.findById(req.params.id).lean().exec(function (err, bag) {
    if (err) {
      return handleError(res, err);
    }

    if (!bag) {
      return res.send(404);
    }

    return res.json(bag);
  });
};

exports.create = function (req, res) {
  Bag.create(req.body, function(err, newBag) {
    if (err) {
      return handleError(res, err);
    }

    return res.json(newBag);
  });
};
